(function() {
    'use strict'
/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Declare uma variável chamada `name` que receba seu primeiro nome.
Mostre no console todas as letras do seu nome separadas, com a frase:
- "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
Ex: no caso do nome ser "Fernando", deve mostrar as frases:
- "F é a 1ª letra do meu nome."
- "e é a 2ª letra do meu nome."
E assim por diante, até a última.
*/
var name = 'Marcus';
var resultado = name.split("");
console.log( 'As letras do seu nome: ' + resultado);
resultado.forEach(function(item, index){
    console.log(item + ' é a ' + index + ' Posicao letra do seu nome');
});
// ?

/*
- Declare uma variável chamada `fullName`, que receba seu nome completo,
escrito no formato de slug (caixa baixa e palavras separadas por um traço).
Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
- Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
por um espaço.
- Detalhe: o código que você escrever abaixo deve funcionar para qualquer
nome, então fique à vontade para usar as artimanhas que já viu até agora no
curso para fazer isso funcionar corretamente :)
- Mostre no console o nome no formato slug, e o resultado final. Use um
console.log para cada formato.
*/
var fullName = 'marcus-vinicius';
var newFullName = fullName.split('-').map(function(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
}).join(' ');

console.log( 'Nome convertido à partir de um slug: ' + newFullName);
// ?

/*
- Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
ser um "e". No final, concatene com a frase: " são meus amigos.".
O resultado final deve ficar mais ou menos assim:
- "João, Maria, Roberto, Pedro e Marcos são meus amigos."
- Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
5 nomes foi somente uma sugestão ;)
*/
var name1 = 'Roberto';
var name2 = 'Marcus';
var name3 = 'Vinicius';
var name4 = 'Sergio';
var name5 = 'Thomas';
var arrayName = [name1, name2, name3, name4, name5];
var newNames = [];
for(var i =0; i<arrayName.length; i++){
    var verificacao = i+1;
    if (verificacao === arrayName.length){
        newNames.push(' e ');
    }
    newNames.push(arrayName[i]);
}
console.log( 'Meus amigos:' + newNames.toString());
// ?

/*
Usando o replace(), faça a string "Roberto" virar "Roberta".
Mostre o resultado no console.
*/
var name = 'Roberto';
console.log( 'Era "Roberto", agora é: ' + name.replaceAll('to', 'ta'));
// ?

/*
Mostre no console a parte "nando" da string "Fernando". Use o método queß
faz a busca do final para o início da string.
*/
name = 'Fernando';
console.log( 'Parte de uma string: ' + name.substring(3));
// ?

/*
Declare uma variável chamada `myName`, que receba o seu primeiro nome,
escrito de forma natural.
Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
e minúsculas.
- Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
de qualquer tamanho, escrito de qualquer forma.
Ex.: Nomes que deveriam funcionar: "FeRnAnDo", "RoBeRtO", "GaBrIeLa", etc.
*/
var myName = 'Marcus';
var newName = '';
console.log( 'Nome com letras intercaladas entre caixa alta e baixa:' );
for(var i =0; i<myName.length; i++){
    if(i%2===0){
        newName = newName + myName.charAt(i).toUpperCase();
    } else if(i%2===1){
        newName = newName + myName.charAt(i).toLowerCase();
    }
}
console.log(newName);

})();