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
  const títuloDaConta = getByText('Saldo: R$ 1234,56');
  expect(títuloDaConta).toBeInTheDocument();
});

test('apresenta opção para não mostrar saldo da conta', () => {
  const { getByText } = render(<Conta />);
  const esconderSaldo = getByText('Esconder saldo');
  expect(esconderSaldo).toBeInTheDocument();
});

test('opção de mostrar saldo aparece após esconder saldo', () => {
  const { getByText } = render(<Conta />);
  const esconderSaldo = getByText('Esconder saldo');

  fireEvent.click(esconderSaldo, new MouseEvent('click'));

  const mostrarSaldo = getByText('Mostrar saldo');

  expect(mostrarSaldo).toBeInTheDocument();
});