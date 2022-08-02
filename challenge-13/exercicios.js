(function() {
/*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
var array = [1,2,3,4,5,6,7,8,9,0];
console.log( 'O array em formato de string é: ' + array.toString());
// ?

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
// ?
var sul = ['Rio Grande do Sul', 'Santa Catarina', 'Parana'];
var sudeste = ['Sao Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espirito Santo'];

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
var brasil = sul.concat(sudeste);
console.log( 'Alguns Estados do Brasil: ' + brasil);
// ?

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/
brasil.unshift('Amazonas');
brasil.unshift('Acre');
brasil.unshift('Rondonia');
console.log( 'Mais estados adicionados: ' + brasil);
// ?

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/

console.log( 'Estado removido: ' + brasil.shift());
// ?

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
// ?
var newSul = brasil.slice(2,5);
/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( 'Estados do Sul do Brasil:');
console.log(newSul);
// ?

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( 'Alguns Estados do Brasil: ' + brasil);
// ?

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
// ?
var nordeste = ['Alagoas', 'Bahia', 'Ceara', 'Maranhao', 'Paraiba', 'Pernanbuco', 'Piaui', 'Rio Grande do Norte', 'Sergipe'];
/*
Mostre no console os estados do nordeste.
*/
console.log( 'Estados do Nordeste: ' + nordeste);
// ?

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
// ?
var newSudeste = brasil.splice(5,8);

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
// ?
brasil = brasil.concat(nordeste);
/*
Mostre no console os estados em `newSudeste`.
*/
console.log( 'Estados em newSudeste:' + newSudeste);
// ?

/*
Mostre no console os estados do `brasil`.
*/
console.log( 'Alguns estados do Brasil: ' + brasil);
// ?

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
// ?
var newBrasil = [];
 brasil.forEach(function(item,index){
    newBrasil.push({
        id: index,
        estado: item
    })
});
/*
Mostre o array `newBrasil` no console
*/
console.log( 'newBrasil: ');
newBrasil.forEach(function(item){
    console.log('Estado: ' + item.estado + ' ID: ' + item.id);
});

// ?

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
// ?
var every = brasil.every(function(item){
    return item.length > 7;
})
console.log(every);
/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
var some = brasil.some(function(item){
    return item === 'Ceara';
});
console.log(some ? 'Ceará está incluído!' : 'Ceará não foi incluído');
// ?

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
// ?
//Mostre no console o array criado acima:
//*/
console.log( 'newBrasil agora com mais informações:' );
// ?
var newArrayBrasil = newBrasil.map(function(item, index){
    item.id++;
    item.estado = 'pertence ao Brasil';
    return item;
}).forEach(function(item){
    console.log(item);
});
/*


/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
// ?

/*
Mostre o array filtrado acima no console.
*/
console.log( '\Estados com ID par:' );
// ?
var filter = newBrasil.filter(function(item, index){
    return item.id % 2 === 0;  
}).forEach(function(item){
    console.log(item)
});
})();