import React from 'react';
import { render, screen } from '@testing-library/react';
import Transação from './Transacao';

test('mostra estabelecimento', () => {
  render(<Transação />);
  
  expect(screen.getByText('Mercado do bairro')).toBeInTheDocument();
});

test('mostra valor', () => {
  render(<Transação />);
  
  expect(screen.getByText('R$ 12,97')).toBeInTheDocument();
});

test('mostra data', () => {
  render(<Transação />);
  
  expect(screen.getByText('04 MAI')).toBeInTheDocument();
});