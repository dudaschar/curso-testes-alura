import React from 'react';
import PropTypes from 'prop-types';

import Transacao from './Transacao';

const Transacoes = ({ transacoes }) => {
    return <div data-testid="transacoes">
        {transacoes
            .map(({id, transacao, valor, data}) =>
            <Transacao key={`${id}-${transacao}`} tipo={transacao} valor={valor} data={data}
        />)}
    </div>
};

Transacoes.propTypes = {
    transacoes: PropTypes.array.isRequired,
}


export default Transacoes;
