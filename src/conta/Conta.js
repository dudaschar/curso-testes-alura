import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Conta.css'

const Conta = ({ saldo, realizarTransacao }) => {
    const [valores, atualizarValores] = useState({transacao: '', valor: 0});

    function handleChange(e) {
        const { name, value } = e.target;
        const valoresAtualizados = { ...valores, [name]: value};

        atualizarValores(valoresAtualizados);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const dataTransacao = new Date().toLocaleDateString('pt-br');
        realizarTransacao({...valores, data: dataTransacao});
    }

    return <div className="Conta-header">
        <h2>Conta</h2>
        <p>Saldo: <span className="Saldo-valor">{`R$ ${saldo}`}</span></p>
        <form onSubmit={handleSubmit}>
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
};

Conta.propTypes = {
    saldo: PropTypes.number.isRequired,
};

export default Conta;
