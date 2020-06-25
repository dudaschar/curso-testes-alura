import React from 'react';
import { render, screen } from '@testing-library/react';
import Transação from './Transação';

test('renderiza Transação', () => {
  render(<Transação />);
  
  expect(screen.getByText('Transação')).toBeInTheDocument();
});