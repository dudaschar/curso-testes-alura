import React from 'react';
import './Transacao.css'


const Transacao = ({tipo, valor, data}) => {
    return <div className="transacao-container">
        <p>{data}</p>
        <p>{tipo}</p>
        <p>R$ {valor}</p>
    </div>
};


export default Transacao;