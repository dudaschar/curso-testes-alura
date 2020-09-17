import React from 'react';
import PropTypes from 'prop-types';

import Transacao from './Transacao';

const Transacoes = ({ transacoes }) => {
    return <div data-testid="transacoes">
        {transacoes
            .map(({id, estabelecimento, valor, data}) => <Transacao key={id} estabelecimento={estabelecimento} valor={valor} data={new Date(data)}/>)}
    </div>
};

Transacoes.propTypes = {
    transacoes: PropTypes.array.isRequired,
}


export default Transacoes;
