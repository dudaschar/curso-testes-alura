const listaTransacoes = () => {
    return fetch('http://localhost:3001/transacoes').then( async (resposta) => {
      const dados = await resposta.json();
      return dados;
    });
};

const buscaSaldo = () => {
    return fetch('http://localhost:3001/conta').then( async (resposta) => {
      const dados = await resposta.json();
      return dados;
    });
};



export default {
  listaTransacoes,
  buscaSaldo,
};
