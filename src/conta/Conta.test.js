import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Conta from './Conta';

test('renderiza Conta', () => {
  const { getByText } = render(<Conta />);
  const títuloDaConta = getByText('Conta');
  expect(títuloDaConta).toBeInTheDocument();
});

test('apresenta saldo da conta', () => {
  const { getByText } = render(<Conta />);
  const saldo = getByText('Saldo: R$ 1234,56');
  expect(saldo).toBeInTheDocument();
});

test('apresenta opção para não mostrar saldo da conta', () => {
  const { getByText } = render(<Conta />);
  const esconderSaldo = getByText('Esconder saldo');
  expect(esconderSaldo).toBeInTheDocument();
});

test('opção de mostrar saldo/esconder saldo deve ser alteranada', () => {
  const { getByText, queryByText } = render(<Conta />);
  let esconderSaldo = getByText('Esconder saldo');

  fireEvent.click(esconderSaldo);

  const mostrarSaldo = getByText('Mostrar saldo');
  
  expect(queryByText('Esconder saldo')).toBeNull();
  expect(mostrarSaldo).toBeInTheDocument();

  fireEvent.click(mostrarSaldo);

  expect(queryByText('Mostrar saldo')).toBeNull();
  esconderSaldo = getByText('Esconder saldo');
  expect(esconderSaldo).toBeInTheDocument();
});

test('deve esconder valor do saldo', () => {
  const { getByText } = render(<Conta />);
  let esconderSaldo = getByText('Esconder saldo');

  fireEvent.click(esconderSaldo);

  const saldo = getByText('Saldo: R$ ----,--');
  expect(saldo).toBeInTheDocument();
});