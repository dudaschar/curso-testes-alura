import React from 'react';
import Conta from './conta/Conta';
import Transação from './transacoes/Transacao';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ByteBank</h1>
      </header>

      <Conta />
      <Transação />
      <Transação />
      <Transação />
      <Transação />
    </div>
  );
}

export default App;
