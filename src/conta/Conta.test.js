import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Conta from './Conta';

test('renderiza Conta', () => {
  render(<Conta />);
  const títuloDaConta = screen.getByText('Conta');
  expect(títuloDaConta).toBeInTheDocument();
});

test('apresenta saldo da conta', () => {
  render(<Conta />);
  const saldo = screen.getByText((content, node) => {
    const hasText = (node) => node.textContent === "Saldo: R$ 1234,56";
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child)
    );

    return nodeHasText && childrenDontHaveText;
  });
  expect(saldo).toBeInTheDocument();
});

test('apresenta opção para não mostrar saldo da conta', () => {
  render(<Conta />);
  const esconderSaldo = screen.getByText('Esconder saldo');
  expect(esconderSaldo).toBeInTheDocument();
});

test('opção de mostrar saldo/esconder saldo deve ser alteranada', () => {
  render(<Conta />);

  fireEvent.click(screen.getByText('Esconder saldo'));

  expect(screen.queryByText('Esconder saldo')).not.toBeInTheDocument();

  fireEvent.click(screen.getByText('Mostrar saldo'));

  expect(screen.queryByText('Mostrar saldo')).not.toBeInTheDocument();
  expect(screen.getByText('Esconder saldo')).toBeInTheDocument();
});

test('deve esconder valor do saldo', () => {
  render(<Conta />);
  
  fireEvent.click(screen.getByText('Esconder saldo'));

  expect(screen.getByText('R$ ----,--')).toBeInTheDocument();
});