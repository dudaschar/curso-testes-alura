import React from 'react';
import { render } from '@testing-library/react';
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