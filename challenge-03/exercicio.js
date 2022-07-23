// Declarar uma variável qualquer, que receba um objeto vazio.
var objeto = {}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = {nome: 'Marcus Vinicius', sobrenome: 'Silva', sexo: 'm', idade: 27, altura: 1.70,
peso: 75.0, andando: false, caminhouQuantosMetros: 0}
console.log(pessoa)
/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function(){
    this.idade++;
}
console.log(pessoa.idade);
pessoa.fazerAniversario();
console.log(pessoa.idade);

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function(quantidadeMetrosAndados){
    if(quantidadeMetrosAndados > 0){
        this.caminhouQuantosMetros += quantidadeMetrosAndados;
        this.andando = true;
    }    
}
console.log(pessoa);
pessoa.andar(10);
console.log(pessoa);

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.pararAndar = function(){
    this.andando = false;
}
pessoa.pararAndar();
console.log(pessoa);

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.getNomeCompleto = function(){
    return 'Olá! Meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome;
}
console.log(pessoa.getNomeCompleto());

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.getShowAge = function(){
    return 'Olá, eu tenho ' + pessoa.idade + ' anos!';
}
console.log(pessoa.getShowAge());

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.getShowWeight = function(){
    return 'Eu peso ' + pessoa.peso + 'Kg.';
}
console.log(pessoa.getShowWeight());

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.getHeight = function(){
    return 'Minha altura é ' + pessoa.altura + 'm.';
}
console.log(pessoa.getHeight())

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.getNomeCompleto());

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.getShowAge());

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.getShowWeight());

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa.getHeight());

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
console.log(pessoa.idade);


/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(10);
pessoa.andar(100);
pessoa.andar(1000);

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
console.log(pessoa);

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.pararAndar();

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/


/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
console.log('A pessoa andou ' + pessoa.caminhouQuantosMetros);

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/


// Agora, apresente-se ;)
pessoa.apresentacao = function(){
    var artigoDefinido;
    var idadePluralOuSingular;
    var quantidadeMetrosPluralOuSingular;
    if (pessoa.sexo == 'm'){
        artigoDefinido = 'o';
    } else if(pessoa.sexo == 'f'){
        artigoDefinido = 'a';
    } else {
        artigoDefinido = 'o';
    }

    if (pessoa.idade > 1){
        idadePluralOuSingular = '(s)';
    } 

    if (pessoa.caminhouQuantosMetros == 1){
        quantidadeMetrosPluralOuSingular = 'metro';
    } else {
        quantidadeMetrosPluralOuSingular = 'metros';
    }
    return 'Olá, eu sou ' + artigoDefinido + ' ' + pessoa.getNomeCompleto() + ', tenho ' + pessoa.idade + ' ano' + idadePluralOuSingular
    + ', altura: ' + pessoa.altura + ', meu peso é ' + pessoa.peso + ' e, só hoje, eu já caminhei ' + 
    pessoa.caminhouQuantosMetros + ' ' +quantidadeMetrosPluralOuSingular + '!';
}

console.log(pessoa.apresentacao());
