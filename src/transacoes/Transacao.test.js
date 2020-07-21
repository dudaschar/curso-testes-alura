import React from 'react';
import { render, screen } from '@testing-library/react';
import Transação from './Transacao';

describe('Componente de Transação de compra', () => {
  it('mostra nome do estabelecimento passado', () => {
    render(<Transação estabelecimento="Mercadinho do bairro" valor={0} data={new Date()}/>);
    
    expect(screen.getByText('Mercadinho do bairro')).toBeInTheDocument();
  });

  it('mostra valor da transação com símbolo do REAL', () => {
    render(<Transação valor={12.87} data={new Date()}/>);
    
    expect(screen.getByText('R$ 12,87')).toBeInTheDocument();
  });

  it('mostra data da transação com dia de dois dígitos e mês com 3 letras', () => {
    render(<Transação data={new Date(1990, 4, 4)} valor={0}/>);
    
    expect(screen.getByText('04 MAI')).toBeInTheDocument();
  });
});
