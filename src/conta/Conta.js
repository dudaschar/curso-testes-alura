import React, { useState, useEffect } from 'react';
import ContaService from './ContaService';
import './Conta.css'

const Conta = () => {
    const [saldo, atualizarSaldo] = useState(1000);

    useEffect(() => {
        async function obterSaldo() {
            atualizarSaldo(await ContaService.ObterSaldo());
        }
        obterSaldo();
    },[])

    return <div className="Conta-header">
        <h2>Conta</h2>
        <p>Saldo: <span className="Saldo-valor">{`R$ ${saldo}`}</span></p>
    </div>
}

export default Conta;
