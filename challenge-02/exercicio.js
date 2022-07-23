// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x, y){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer 
// por argumento, e somando `5` ao resultado retornado da função.
var valorTotal = soma(10,5) + 5;
console.log(valorTotal);

// Qual o valor atualizado dessa variável?
// R: Valor é 20

// Declare uma nova variável, sem valor.
var valor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function somaConvertendoToString(numero, valor){
    var resultado = valor + numero;
    return resultado.toString();
}

// Invoque a função criada acima.
var valorNovoString = somaConvertendoToString(20, valor);

// Qual o retorno da função? (Use comentários de bloco).
// Valor Total é 20
console.log(valorNovoString);

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function somaTresNumeros(valorA, valorB, valorC){
    if(valorA == null || valorB == null || valorC == null){
        return "Preencha todos os valores corretamente!";
    }
    return valorA * valorB * valorC;
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(somaTresNumeros(5, 2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// R: Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(somaTresNumeros(5, 2, 10));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// R: Resultado é 100

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function anything(valorA, valorB, valorC){
    if (valorA == null && valorB == null && valorC != null){
        return valorC;
    }
    else if (valorA == null && valorB != null && valorC == null){
        return valorB;
    }
    else if (valorA != null && valorB == null && valorC == null){
        return valorA;
    }
    else if (valorA != null && valorB != null && valorC == null){
        return valorA + valorB;
    }
    else if (valorA != null && valorB == null && valorC != null){
        return valorA + valorC;
    }
    else if (valorA == null && valorB != null && valorC != null){
        return valorB + valorC;
    }
    else if (valorA != null && valorB != null && valorC != null){
        return (valorA + valorB) / valorC;
    }
    else if (valorA == null && valorB == null && valorC == null){
        return false;
    }
    else {
        return null;
    }
}

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) 
// Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

// Apenas valor C
console.log(anything(null, null, 2));
// Apenas valor B
console.log(anything(null, 5, null));
// Apenas valor A
console.log(anything(10, null, null));
// Valor A + B
console.log(anything(10, 5, null));
// Valor A + C
console.log(anything(10, null, 2));
// Valor B + C
console.log(anything(null, 5, 2));
// Valor A - B - C
console.log(anything(10, 5, 2));
// null
console.log(anything());