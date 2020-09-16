import React, { useState, useEffect } from 'react';
import api from '../api';
import './Conta.css'

const Conta = () => {
    const [saldo, atualizarSaldo] = useState(1000);
    const [valores, atualizarValores] = useState({transacao: '', valor: 0});

    function handleChange(e) {
        const { name, value } = e.target;
        const valoresAtualizados = { ...valores, [name]: value};

        atualizarValores(valoresAtualizados);
    }

    function onSubmit(e) {
        e.preventDefault();
        console.log(valores)
    }

    useEffect(() => {
        async function obterSaldo() {
            atualizarSaldo(await api.buscaSaldo());
        }
        obterSaldo();
    },[])

    return <div className="Conta-header">
        <h2>Conta</h2>
        <p>Saldo: <span className="Saldo-valor">{`R$ ${saldo}`}</span></p>
        <form onSubmit={onSubmit}>
            <div>
                <label>
                    Depósito
                    <input
                        type="radio"
                        name="transacao"
                        value="deposito"
                        onChange={handleChange}
                        checked={valores.transacao === 'deposito'}   
                    />
                </label>
            </div>
            
            <div>
                <label>
                    Saque
                    <input
                        type="radio"
                        name="transacao"
                        value="saque"
                        onChange={handleChange}
                        checked={valores.transacao === 'saque'}     
                    />
                </label>
            </div>

            <label>Valor:</label>
            <input
                type="text"
                name="valor"
                value={valores.valor}
                onChange={handleChange}
            ></input>

            <div>
                <button>
                    Realizar operação
                </button>
            </div>
        </form>
    </div>
}

export default Conta;
