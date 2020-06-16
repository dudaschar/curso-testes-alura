import React from 'react';

const Conta = () => {
    const saldoConta = 1234.56;
    return <div>
        <h2>Conta</h2>
        <p>Saldo: {`R$ ${saldoConta.toString().replace('.',',')}`}</p>
    </div>
}

export default Conta;