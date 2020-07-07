import React, { useState, useEffect } from 'react';
import ContaService from './ContaService';
import './Conta.css'

const Conta = () => {
    const [deveMostrarSaldo, mostraSaldo] = useState(true);
    const [saldoConta, carregaSaldo] = useState(0);
    const saldo = deveMostrarSaldo ? saldoConta.toString().replace('.',',') : "----,--";

    useEffect(() => {
        carregaSaldo(ContaService.ObterSaldo());
    },[])

    return <div className="Conta-header">
        <h2>Conta</h2>
        <p>Saldo: <span className="Saldo-valor">{`R$ ${saldo}`}</span></p>
        <button onClick={() => mostraSaldo(!deveMostrarSaldo)}>{deveMostrarSaldo ? "Esconder saldo" : "Mostrar saldo"}</button>
    </div>
}

export default Conta;