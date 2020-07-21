import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ContaService from './ContaService';
import Conta from './Conta';

describe('Componente da Conta', () => {
  it('renderiza Conta', () => {
    render(<Conta />);
    const títuloDaConta = screen.getByText('Conta');
    expect(títuloDaConta).toBeInTheDocument();
  });

  it('apresenta valor do saldo da conta com símbolo de REAL', () => {
    ContaService.ObterSaldo = jest.fn(() => 1234.57)
    
    render(<Conta />);
    const saldo = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === "Saldo: R$ 1234,57";
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    });
    expect(saldo).toBeInTheDocument();
  });

  describe('opção de esconder/mostrar saldo', ()=> {
    it('apresenta opção esconder saldo da conta', () => {
      render(<Conta />);
      const esconderSaldo = screen.getByText('Esconder saldo');
      expect(esconderSaldo).toBeInTheDocument();
    });
  
    it('alterna entre opção de mostrar saldo e esconder saldo ao ser clicada', () => {
      render(<Conta />);
  
      fireEvent.click(screen.getByText('Esconder saldo'));
  
      expect(screen.queryByText('Esconder saldo')).not.toBeInTheDocument();
  
      fireEvent.click(screen.getByText('Mostrar saldo'));
  
      expect(screen.queryByText('Mostrar saldo')).not.toBeInTheDocument();
      expect(screen.getByText('Esconder saldo')).toBeInTheDocument();
    });
  
    it('esconde o valor do saldo do saldo da conta quando clica em Esconder saldo', () => {
      render(<Conta />);
      
      fireEvent.click(screen.getByText('Esconder saldo'));
  
      expect(screen.getByText('R$ ----,--')).toBeInTheDocument();
    });
  })

});
