/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// ?
var variavelPadrao = [true, 'String', 38, 'a', 10];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?
function getAnyThing(arg){
    return arg;
}
console.log(getAnyThing(variavelPadrao));

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
// ?
console.log(getAnyThing(variavelPadrao)[0]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?
function getAnyThingWithIndex(array, index){
    return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// ?
var array = [true, 'String', 38, 'a', 10];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log(getAnyThingWithIndex(array, 2));