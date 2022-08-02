import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import {createMemoryHistory} from 'history'
import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Home from '../pages/Home'

describe('Testa page Home', () => {
  test('Verifica se possui a logo da Klever', () => {
    render(<Router><Home /></Router>);
    const logoName = screen.getByTestId('logo-klever')
    expect(logoName).toBeInTheDocument();
  });
  test('Verifica se possui o texto "Wish Wallet"', () => {
    render(<Router><Home /></Router>);
    const wishWallet = screen.getByText('Wish Wallet')
    expect(wishWallet).toBeInTheDocument();
  });
  test('Verifica se possui o botão de adicionar token', () => {
    render(<Router><Home /></Router>);
    const btn = screen.getByTestId('btn-add-token');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveProperty('type', 'button');
    expect(btn).toHaveTextContent('Add Token');
  })

  test('Clica em add Token e redireciona para pagina "/addToken"', async () => {
    const history = createMemoryHistory();
    render(<Router history={history}><Home /></Router>);
    const user = userEvent.setup();
    const btn = screen.getByTestId('btn-add-token');
    await user.click(btn)
    expect(screen.getByText('Add Token')).toBeInTheDocument();
  })
})