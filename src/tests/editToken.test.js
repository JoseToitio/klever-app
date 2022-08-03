import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import renderWithRouter from "../services/renderWithRouter";
import App from "../App";

const user = userEvent.setup();
describe("Testa page EditToken", () => {
  let confirmSpy;
  beforeAll(() => {
    confirmSpy = jest.spyOn(window, "confirm");
    confirmSpy.mockImplementation(jest.fn(() => true));
  });
  afterAll(() => confirmSpy.mockRestore());
  test("Testa se o botão de editar Token existe", async () => {
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
    const Balance = screen.getByText("10,20.30");
    expect(token).toBeInTheDocument();
    expect(Balance).toBeInTheDocument();
  });

  test("Edita um token existente", async () => {
    renderWithRouter(<App />);
    const btnEdit = screen.getByTestId("btn-editToken-0");
    expect(btnEdit).toBeInTheDocument();
    await user.click(btnEdit);
    const inputToken = screen.getByTestId("input-token");
    const inputBalance = screen.getByTestId("input-balance");
    await user.clear(inputToken);
    await user.type(inputToken, "KLV");
    await user.clear(inputBalance);
    await user.type(inputBalance, "10");
    const btnSave = screen.getByTestId("btn-save");
    await user.click(btnSave);
    const token = screen.getByText("KLV");
    const Balance = screen.getByText("10");
    expect(token).toBeInTheDocument();
    expect(Balance).toBeInTheDocument();
  });

  test("Verifica se exclui um token ao clicar no botão remove", async () => {
    renderWithRouter(<App />);
    const btn = screen.getByTestId("btn-add-token");
    await user.click(btn);
    const inputToken = screen.getByTestId("input-token");
    const inputBalance = screen.getByTestId("input-balance");
    const btnSave = screen.getByTestId("btn-save");
    await user.type(inputToken, "DVK");
    await user.type(inputBalance, "50,250.71");
    await user.click(btnSave);
    const btnEdit = screen.getByTestId("btn-editToken-1");
    await user.click(btnEdit);
    const btnRemove = screen.getByTestId("btn-remove");
    await user.click(btnRemove);
    expect(confirmSpy).toBeCalled();
  });
});
