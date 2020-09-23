import React from 'react';
import { render, wait, screen, cleanup, fireEvent } from '@testing-library/react';
import axios from 'axios';

import App from './App';
import Transacoes from './transacoes/Transacoes';
import Conta from './conta/Conta';


afterEach(cleanup);

describe('Componente principal', () => {
  it('mostra o nome do banco', () => {
    render(<App />);

    expect(screen.getByText('ByteBank')).toBeInTheDocument();
  });
});

describe('Realizar transações', () => {
  it('fazer um depósito', () => {
    const { getByText, getByTestId, getByLabelText } = render(<App />)
    const saldo = getByText('R$ 1000');
    const transacao = getByLabelText('Depósito');
    const valor = getByTestId('valor');
    const botaoTransacao = getByText('Realizar operação');

    fireEvent.change(transacao, { target: {value: "deposito"}})
    fireEvent.change(valor, { target: { value: 10} })
    fireEvent.click(botaoTransacao);
    expect(saldo.textContent).toBe('R$ 1010')
  });

  it('fazer um saque', () => {
    const { getByText, getByTestId, getByLabelText } = render(<App />)
    const saldo = getByText('R$ 1000');
    const transacao = getByLabelText('Saque');
    const valor = getByTestId('valor');
    const botaoTransacao = getByText('Realizar operação');

    fireEvent.change(transacao, { target: {value: "saque"}})
    fireEvent.change(valor, { target: { value: 10} })
    fireEvent.click(botaoTransacao);
    expect(saldo.textContent).toBe('R$ 990')
  })
})
