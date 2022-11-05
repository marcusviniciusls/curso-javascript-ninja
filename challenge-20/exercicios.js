(function(win, doc){
    'use strict';

    var username = prompt('Qual é o seu nome?');
    username ? console.log('Nome é ' + username) : console.log('Nao respondeu');

    username = prompt('Qual é o seu nome?');
    username ? alert(username) : alert('Desconhecido');

    var email = prompt('Qual o seu e-mail?')
    var $inputUsername = doc.querySelector('input[type="text"]');
    var $inputEmail = doc.querySelector('input[type="email"]');
    var $inputMensagem = doc.querySelector('textarea');
    var $button = doc.querySelector('button');

    $inputUsername.value = username;
    $inputEmail.value = email;

    $button.addEventListener('click', function(event){
        event.preventDefault();
        if(!$inputUsername.value){
            return alert('Preencha o nome do usuário!')
        }
        if(!$inputEmail.value){
            return alert('Preencha o e-mail!')
        }
        if(!$inputMensagem.value){
            return alert('Preencha a mensagem!')
        }
        if(!isValidEmail($inputEmail.value)){
            return alert('Entre com um e-mail válido!')
        }
        if(confirm('Tem certeza que deseja enviar o formulário?')){
            alert('Enviado com sucesso!')
        } else {
            return alert('Dados Nao enviado')
        }

    }, false)

function isValidEmail(email){
    return /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email);
}
})(window, document);