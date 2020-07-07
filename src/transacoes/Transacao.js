import React from 'react';
import { ConverteMês } from '../helpers/converteMes'
import './Transacao.css'


const Transação = () => {
    const valor = 12.97;
    const data = new Date(2020, 4, 4);
    const estabelecimento = "Mercado do bairro";
    return <div className="transacao-container">
        <p>{data.getDate().toString().padStart(2,0)} {ConverteMês(data.getMonth())}</p>
        <p>{estabelecimento}</p>
        <p>R$ {valor.toLocaleString().replace('.',',')}</p>
    </div>
};


export default Transação;