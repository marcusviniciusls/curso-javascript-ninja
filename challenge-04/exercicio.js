/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
function isTrueOrFalse(value){
    return !!value;
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTrueOrFalse(0));
console.log(isTrueOrFalse(undefined));
console.log(isTrueOrFalse(null));
console.log(isTrueOrFalse(NaN));
console.log(isTrueOrFalse(-0));
console.log(isTrueOrFalse(false));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTrueOrFalse(true));
console.log(isTrueOrFalse(1));
console.log(isTrueOrFalse(4));
console.log(isTrueOrFalse(3));
console.log(isTrueOrFalse(6));
console.log(isTrueOrFalse(7));
console.log(isTrueOrFalse("b"));
console.log(isTrueOrFalse("false"));
console.log(isTrueOrFalse(9));
console.log(isTrueOrFalse(543535435));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'FIAT PALIO',
    modelo: 'FIRE 1.0',
    placa: 'XXX-1234',
    ano: 2020,
    cor: 'PRETO',
    quantidadePortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(novaCor){
    this.cor = novaCor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
    return this.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
    return this.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
    return this.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
    return 'Esse carro é um ' + this.marca + ' ' + this.modelo;
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.adicionarPessoas = function(quantidadesPessoasEntrarCarro){
    var lugaresDesocupados = this.assentos - this.quantidadePessoas;
    if (lugaresDesocupados <= 0){
        console.log('O carro já está lotado');
    }
    else if (quantidadesPessoasEntrarCarro <= lugaresDesocupados){
        this.quantidadePessoas += quantidadesPessoasEntrarCarro;
        console.log('Todas as pessoas entraram com sucesso');
    } else {
        var quantidadeQuePodeEntrar = (lugaresDesocupados - quantidadesPessoasEntrarCarro) * -1;
        if (quantidadeQuePodeEntrar > 1){
            console.log('Só cabem mais ' + lugaresDesocupados + ' pessoas!')
        } else if(lugaresDesocupados == 1){
            console.log('Só cabe mais ' + lugaresDesocupados + ' pessoa!')
        } else {
            console.log('ERRO!!! Pessoas Incorreta');
        }
    }
}

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor());

// Mude a cor do carro para vermelho.
carro.mudarCor('VERMELHO');

// E agora, qual a cor do carro?
console.log(carro.obterCor());

// Mude a cor do carro para verde musgo.
carro.mudarCor('VERDE MUSGO');

// E agora, qual a cor do carro?
console.log(carro.obterCor());

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo());

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2);

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4);

// Faça o carro encher.
carro.adicionarPessoas(3);

// Tire 4 pessoas do carro.
carro.retirarPessoas = function(quantidadePessoaParaRetirar){
    if(quantidadePessoaParaRetirar > 0 && quantidadePessoaParaRetirar <= this.quantidadePessoas){
        this.quantidadePessoas -= quantidadePessoaParaRetirar;
    }
}

carro.retirarPessoas(2);
console.log(carro);
// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10);

// Quantas pessoas temos no carro?
// R: 3 pessoas