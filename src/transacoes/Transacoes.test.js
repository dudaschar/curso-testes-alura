import React from 'react';
import axios from 'axios';
import { render, screen } from '@testing-library/react';
import Transacoes from './Transacoes';

jest.mock('axios');

describe('Componente de transações', () => {
  it('mostra transações que vieram da API', async () => {
      const resultadoTransacoes = axios.get.mockResolvedValue([{
          "valor": "0",
          "transacao": "saque",
          "data": "10/08/2020",
          "id": 1
        },
        {
          "transacao": "deposito",
          "valor": "10",
          "data": "17/09/2020",
          "id": 2
        },]);

      render(<Transacoes transacoes={await resultadoTransacoes()}/>);

      await screen.findByText("saque");

      expect(screen.getByTestId('transacoes').children.length).toBe(2);
  })

  it('snapshot teste deve permanecer o mesmo', () => {
    const componente = render(<Transacoes transacoes={[]} />);

    expect(componente).toMatchSnapshot();
  })
    
})
