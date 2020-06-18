import React, { useState } from 'react';
import './Conta.css'

const Conta = () => {
    const [deveMostrarSaldo, mostraSaldo] = useState(true);
    const saldoConta = 1234.56;
    const saldo = deveMostrarSaldo ? saldoConta.toString().replace('.',',') : "----,--";
    return <div className="Conta-header">
        <h2>Conta</h2>
        <p>Saldo: <span className="Saldo-valor">{`R$ ${saldo}`}</span></p>
        <button onClick={() => mostraSaldo(!deveMostrarSaldo)}>{deveMostrarSaldo ? "Esconder saldo" : "Mostrar saldo"}</button>
    </div>
}

export default Conta;