import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import Home from "../pages/Home";
import renderWithRouter from "../services/renderWithRouter";
import App from "../App";

describe("Testa page Home", () => {
  test("Verifica se possui a logo da Klever", () => {
    renderWithRouter(<Home />);
    const logoName = screen.getByTestId("logo-klever");
    expect(logoName).toBeInTheDocument();
  });
  test('Verifica se possui o texto "Wish Wallet"', () => {
    renderWithRouter(<Home />);
    const wishWallet = screen.getByText("Wish Wallet");
    expect(wishWallet).toBeInTheDocument();
  });
  test("Verifica se possui o botão de adicionar token", () => {
    renderWithRouter(<Home />);
    const btn = screen.getByTestId("btn-add-token");
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveProperty("type", "button");
    expect(btn).toHaveTextContent("Add Token");
  });

  test('Clica em add Token e redireciona para pagina "/addToken"', async () => {
    renderWithRouter(<App />);
    const user = userEvent.setup();
    const btn = screen.getByTestId("btn-add-token");
    await user.click(btn);
    expect(screen.getByTestId("input-token")).toBeInTheDocument();
    expect(screen.getByTestId("input-balance")).toBeInTheDocument();
  });

  test("Testa se o botão de editar Token existe", async () => {
    renderWithRouter(<App />);
    const user = userEvent.setup();
    const inputToken = screen.getByTestId("input-token");
    const inputBalance = screen.getByTestId("input-balance");
    const btnSave = screen.getByTestId("btn-save");
    await user.type(inputToken, "KLV")
    await user.type(inputBalance, "10,20.30")
    expect(inputToken).toHaveValue('KLV');
    expect(inputBalance).toHaveValue('10,20.30');
    await user.click(btnSave);
    const btnEdit = screen.getByTestId("btn-editToken");
    expect(btnEdit).toBeInTheDocument();
  });
});
