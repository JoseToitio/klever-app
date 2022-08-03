import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import renderWithRouter from "../services/renderWithRouter";
import AddToken from "../pages/AddToken/index";
import App from "../App";

const user = userEvent.setup();
describe("Testa page AddToken", () => {
  test("Verifica se possui inputs e buttons", () => {
    renderWithRouter(<AddToken />);
    const btnSave = screen.getByTestId("btn-save");
    const inputs = screen.getAllByRole("textbox");
    const btnBack = screen.getByTestId("btn-back");
    expect(btnSave).toBeInTheDocument();
    expect(btnBack).toBeInTheDocument();
    expect(inputs).toHaveLength(2);
  });

  test("Verifica se ao não passar dados exibe um alerta na tela", async () => {
    renderWithRouter(<AddToken />);
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    const btnSave = screen.getByTestId("btn-save");
    await user.click(btnSave);
    expect(alertMock).toHaveBeenCalledTimes(1);
    window.alert.mockClear();
  });

  test("Verifica se passar os dados corretamente salva o token e redireciona para pagina inicial", async () => {
    renderWithRouter(<App />);
    const btn = screen.getByTestId("btn-add-token");
    await user.click(btn);
    const inputToken = screen.getByTestId("input-token");
    const inputBalance = screen.getByTestId("input-balance");
    const btnSave = screen.getByTestId("btn-save");
    await user.type(inputToken, "KLV");
    await user.type(inputBalance, "10,20.30");
    expect(inputToken).toHaveValue("KLV");
    expect(inputBalance).toHaveValue("10,20.30");
    await user.click(btnSave);
    const token = screen.getByText("KLV");
    const Balance = screen.getByText("10,20.30")
    expect(token).toBeInTheDocument();
    expect(Balance).toBeInTheDocument();
  });

  test("Verifica se o Token existir exibe um alert", async () => {
    renderWithRouter(<App />);
    const btn = screen.getByTestId("btn-add-token");
    await user.click(btn);
    const inputToken = screen.getByTestId("input-token");
    const inputBalance = screen.getByTestId("input-balance");
    await user.type(inputToken, "KLV");
    await user.type(inputBalance, "10,20.30");
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    const btnSave = screen.getByTestId("btn-save");
    await user.click(btnSave);
    expect(alertMock).toHaveBeenCalledTimes(1);
    window.alert.mockClear();
  })
});
