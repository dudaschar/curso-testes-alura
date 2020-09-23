import React from 'react';
import { render, screen } from '@testing-library/react';
import Transação from './Transacao';

describe('Componente de Transação do extrato', () => {
  it('mostra o tipo de transação realizada', () => {
    render(<Transação tipo="saque" valor={0} data="08/09/2020"/>);
    
    expect(screen.getByText('saque')).toBeInTheDocument();
  });

  it('mostra valor da transação com símbolo do REAL', () => {
    render(<Transação valor={12.87} data="08/09/2020"/>);
    
    expect(screen.getByText('R$ 12.87')).toBeInTheDocument();
  });
});
