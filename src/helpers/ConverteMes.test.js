import { ConverteMês } from './converteMes'

const meses = [
    [0, 'JAN'],
    [1, 'FEV'],
    [2, 'MAR'],
    [3, 'ABR'],
    [4, 'MAI'],
    [5, 'JUN'],
    [6, 'JUL'],
    [7, 'AGO'],
    [8, 'SET'],
    [9, 'OUT'],
    [10, 'NOV'],
    [11, 'DEZ']]

meses.forEach(([mes, textoEsperado]) => {
    test(`converte mês(${mes}) para texto`, () => {
        var texto = ConverteMês(mes);
        
        expect(texto).toBe(textoEsperado);
      })
});