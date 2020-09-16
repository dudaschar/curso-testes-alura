import React, { useEffect, useState } from 'react';
import Transação from './Transacao';
import api from '../api';

const Transações = () => {
    const [transacoes, carregaTransacoes] = useState([]);
    useEffect(() => {
        async function carregar(){
            const transacoes = await api.listaTransacoes();
            console.log(transacoes)
            carregaTransacoes(transacoes);
        }
        carregar();
    }, [])

    return <div data-testid="transacoes">
        {transacoes
            .map(({id, estabelecimento, valor, data}) => <Transação key={id} estabelecimento={estabelecimento} valor={valor} data={new Date(data)}/>)}
    </div>
};


export default Transações;
