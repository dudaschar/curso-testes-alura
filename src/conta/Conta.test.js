import React from 'react';
import axios from 'axios';
import { render, fireEvent, screen } from '@testing-library/react';
import Conta from './Conta';

jest.mock('axios');

afterAll(() => {
  axios.get.mockClear();
})

beforeAll(() => {
  axios.get.mockResolvedValue({data: {saldo: 1234.57}});
});

describe('Componente da Conta', () => {
  it('renderiza Conta', async () => {
    render(<Conta />);
    const títuloDaConta = screen.getByText('Conta');
    expect(títuloDaConta).toBeInTheDocument();
  });

  it('snapshot teste deve permanecer o mesmo', () => {
    const componente = render(<Conta />);

    expect(componente).toMatchSnapshot();
  })

  it('apresenta valor do saldo da conta com símbolo de REAL', async () => {
    render(<Conta saldo={1000} />);
    const saldo = screen.getByText((content, node) => {
      const hasText = (node) => node.textContent === "Saldo: R$ 1000";
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );

      return nodeHasText && childrenDontHaveText;
    });
    expect(saldo).toBeInTheDocument();
  });

  describe('uma conta pode ter um valor depositado ou sacado', ()=> {
  it('executa a ação de realizar a transacão', () => {
      const realizarTransacaoMock = jest.fn();

      const { getByText } = render(<Conta saldo={1000} realizarTransacao={realizarTransacaoMock} />);
      fireEvent.click(getByText('Realizar operação'))
      expect(realizarTransacaoMock).toHaveBeenCalled();
    });
  })
});
