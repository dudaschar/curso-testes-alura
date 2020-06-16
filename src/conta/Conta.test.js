import React from 'react';
import { render } from '@testing-library/react';
import Conta from './Conta';

test('renderiza Conta', () => {
  const { getByText } = render(<Conta />);
  const títuloDaConta = getByText(/Conta/i);
  expect(títuloDaConta).toBeInTheDocument();
});