import React, { useState } from 'react';

const Conta = () => {
    const [deveMostrarSaldo, mostraSaldo] = useState(true);
    const saldoConta = 1234.56;
    return <div>
        <h2>Conta</h2>
        <p>Saldo: {`R$ ${saldoConta.toString().replace('.',',')}`}</p>
        <button onClick={() => mostraSaldo(!deveMostrarSaldo)}>{deveMostrarSaldo ? "Esconder saldo" : "Mostrar saldo"}</button>
    </div>
}

export default Conta;