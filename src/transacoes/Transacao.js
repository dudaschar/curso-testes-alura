import React from 'react';

const Transação = () => {
    const valor = 12.90;
    const data = new Date(2020, 4, 4);
    const estabelecimento = "Mercado do bairro";
    return <div>
        Transação
        <p>{valor}</p>
        <p>{data.toLocaleDateString('pt-br')}</p>
        <p>{estabelecimento}</p>
    </div>
};


export default Transação;