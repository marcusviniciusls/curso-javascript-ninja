(function() {
/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
var person = {
    name: 'Marcus',
    lastname: 'Silva',
    age: 27
}
console.log( 'Propriedades de "person":' );
for(var prop in person){
    console.log(prop);
}

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?
console.log(Object.keys(person))

/*
Crie um array vazio chamado `books`.
*/
// ?
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
var livro1 = {
    name: 'O Monge e o Executivo',
    pages: 350
};
var livro2 = {
    name: 'O menino do pijama listrado',
    pages: 200
};
var livro3 = {
    name: 'O Senhor dos Aneis',
    pages: 400
};
console.log( '\nLista de livros:' );

books.push(livro1,livro2,livro3);
/*
Mostre no console todos os livros.
*/
// ?
for(var i=0; i<books.length; i++){
    console.log(books[i]);
}

console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
// ?
console.log(books.pop());

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
// ?
for(var i=0; i<books.length; i++){
    console.log(books[i]);
}

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( 'Livros em formato string:' );
console.log('Livros para ler ');
for(var i=0; i<books.length; i++){
    console.log(books[i].name);
}

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
// ?
for(var i=0; i<books.length; i++){
    console.log(books[i]);
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
var arryNameCompleto= ['M','A','R','C','U','S','V','I','N','I','C','I','U','S'];
console.log( '\nMeu nome é: ' + arryNameCompleto);

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é: ' + arryNameCompleto.reverse());

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética: ' + arryNameCompleto.sort());
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?
})();
