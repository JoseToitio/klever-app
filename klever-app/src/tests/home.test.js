import { render, screen } from '@testing-library/react';
import React from 'react';
import Home from '../pages/Home'

describe('Testa page Home', () => {
  test('Verifica se possui a logo da Klever', () => {
    render(<Home />);
    const logoName = screen.getByTestId('logo-klever')
    expect(logoName).toBeInTheDocument();
  });
  test('Verifica se possui o texto "Wish Wallet"', () => {
    render(<Home />);
    const wishWallet = screen.getByText('Wish Wallet')
    expect(wishWallet).toBeInTheDocument();
  });
  test('Verifica se possui o botão de adicionar token', () => {
    render(<Home />);
    const btn = screen.getByTestId('btn-add-token');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveProperty('type', 'button');
    expect(btn).toHaveTextContent('Add Token');
  })
})