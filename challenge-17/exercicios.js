(function() {
    'use strict'

var text = 'Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro.';

console.log( 'Adicionando seu nome no texto: ' + text.replace(/Manuel Marques de Sousa/, 'Marcus Vinicius'));
console.log( 'Trocando naturalidade: ' + text.replace(/brasileiro/, 'Cearense'));
console.log( 'Trocando números por -: ' + text.replace(/\d/g,'-'));
console.log( 'Trocando de "D" a "h" por "0": ' + text.replace(/[D-h]/g, '0'));
console.log( 'Trocando "A" e "a" por "4": ' + text.replace(/A|a/g, '4'));
console.log( '"O Centauro de Luvas" em caixa alta: ' + text.replace(/O Centauro de Luvas/ , 'O CENTAURO DE LUVAS'));
// ?

/*
Agora iremos substituir as datas no formato "13 de junho de 1804" para
"13/06/1804". A primeira coisa a fazer é criar uma função chamada
`getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
retornar o número correspondente a esse mês.
Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
Números com menos de dois dígitos devem ter um zero na frente.
Crie então a função e mostre no console os retornos para os meses de março,
setembro e dezembro.
Use um console.log para cada mês, usando a frase:
"O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
*/
function getMonthNumber(mesName){
    var mesNameMaiusculo = mesName.toUpperCase();
    if (mesNameMaiusculo == 'JANEIRO') {
        return '01'
    } else if (mesNameMaiusculo == 'FEVEREIRO') {
        return '02'
    } else if (mesNameMaiusculo == 'MARÇO') {
        return '03'
    } else if (mesNameMaiusculo == 'ABRIL') {
        return '04'
    } else if (mesNameMaiusculo == 'MAIO') {
        return '05'
    } else if (mesNameMaiusculo == 'JUNHO') {
        return '06'
    } else if (mesNameMaiusculo == 'JULHO') {
        return '07'
    } else if (mesNameMaiusculo == 'AGOSTO') {
        return '08'
    } else if (mesNameMaiusculo == 'SETEMBRO') {
        return '09'
    } else if (mesNameMaiusculo == 'OUTUBRO') {
        return '10'
    } else if (mesNameMaiusculo == 'NOVEMBRO') {
        return '11'
    } else if (mesNameMaiusculo == 'DEZEMBRO') {
        return '12'
    }
}
console.log( '\nMeses representados por números:' );
console.log( 'O mes de março é representado pelo o número: ' + getMonthNumber('março'));
console.log( 'O mes de setembro é representado pelo o número: ' + getMonthNumber('setembro'));
console.log( 'O mes de dezembro é representado pelo o número: ' + getMonthNumber('dezembro'));
// ?

/*
Agora, declare uma variável chamada `regexDate` que irá receber a expressão
regular que irá fazer o match com as datas. Crie grupos de captura para o
dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
meses que estão no texto, não precisa adicionar todos.
Com o que vimos até agora, você consegue fazer :D
Mostre a regex no console.
*/
var regexDate = /(\d\d) de (janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro) de (\d\d\d\d)/
console.log( '\nRegex que vai fazer o match com as datas do texto:' );
console.log(regexDate);
// ?

/*
Agora crie a função que irá fazer o replace dos dados. A função será chamada
de `replaceDate`. Ela deve retornar a data no formato:
"[DIA]/[MÊS]/[ANO]"
Após criar a função, faça o replace das datas no texto, mostrando no
console o resultado.
*/
console.log( '\nReplace de datas:' );
function replaceDatas()
// ?
})();