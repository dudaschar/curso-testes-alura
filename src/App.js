import React, { useEffect, useState } from 'react';

import Conta from './conta/Conta';
import Transações from './transacoes/Transacoes';
import api from './api';

import './App.css';

function App() {
  const [saldo, atualizarSaldo] = useState(1000);
  const [transacoes, atualizarTransacoes] = useState([]);

  async function carregarTransacoes() {
    const transacoes = await api.listaTransacoes();
    atualizarTransacoes(transacoes);
  }

  async function obterSaldo() {
    atualizarSaldo(await api.buscaSaldo());
  }

  function realizarTransacao(valores) {
    console.log(valores)

    const novoSaldo = () => {
      if (valores.transacao === 'deposito') {
        return saldo + parseInt(valores.valor);
      } else {
        return saldo - parseInt(valores.valor);
      }
    }
    

    api.atualizaSaldo(novoSaldo).catch((error) => console.error(error))
    api.atualizaTransacoes(valores).catch((error) => console.error(error))
    
    atualizarSaldo(novoSaldo);
    atualizarTransacoes([valores]);
  }

  useEffect(() => {
    obterSaldo();
    carregarTransacoes();
  }, [saldo])

  return (
    <div className="App">
      <header className="App-header">
        <h1>ByteBank</h1>
      </header>

      <Conta saldo={saldo} realizarTransacao={realizarTransacao}/>
      <Transações transacoes={transacoes} />
    </div>
  );
}

export default App;
