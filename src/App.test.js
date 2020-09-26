import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

import App from './App';

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
    const saldo = getByTestId('saldo-conta');
    const transacao = getByLabelText('Depósito');
    const valor = getByTestId('valor');
    const botaoTransacao = getByText('Realizar operação');

    expect(saldo.textContent).toBe('R$ 1000')

    fireEvent.click(transacao, { target: {value: 'deposito'}})
    fireEvent.change(valor, { target: { value: 10 } })
    fireEvent.click(botaoTransacao);

    expect(saldo.textContent).toBe('R$ 1010')
   
  });

  it('fazer um saque', async () => {
    const { getByText, getByTestId, getByLabelText } = render(<App />)
    const saldo = getByText('R$ 1000');
    const transacao = getByLabelText('Saque');
    const valor = getByTestId('valor');
    const botaoTransacao = getByText('Realizar operação');

    expect(saldo.textContent).toBe('R$ 1000');

    fireEvent.click(transacao, { target: { value: 'saque' }})
    fireEvent.change(valor, { target: { value: 10 } })
    
    fireEvent.click(botaoTransacao);
    
    expect(saldo.textContent).toBe('R$ 990')
  })
})
