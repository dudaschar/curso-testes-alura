import React from 'react';
import PropTypes from 'prop-types';

import Transacao from './Transacao';

const Transacoes = ({ transacoes }) => {
    return <div data-testid="transacoes">
        {transacoes && transacoes
            .map(({id, transacao, valor, data}) =>
            <Transacao key={`${id}-${transacao}`} tipo={transacao} valor={valor} data={data}
        />)}
    </div>
};

Transacoes.defaultProp = {
    transacoes: [],
}

Transacoes.propTypes = {
    transacoes: PropTypes.array,
}


export default Transacoes;
