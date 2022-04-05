/*
a função mais é chamada quando se clica no botão "+"
a const numero é o elemento que tem o id "numero" no html
o innerHTML é o conteúdo do elemento, a função parseInt pega o numero (string) e converte para inteiro
adiciona 1 ao numero

como o javascript não tem tipagem (int, float etc), é preciso tomar cuidado com o tipo de dados
*/

const mais = () => {
    const numero = document.getElementById('numero');
    numero.innerHTML = parseInt(numero.innerHTML) + 1;
}

const menos = () => {
    const numero = document.getElementById('numero');
    numero.innerHTML = parseInt(numero.innerHTML) - 1;
}

const adicionar = () => {
    const numero = document.getElementById('numero'); // pega o elemento com id "numero"
    const valor = document.querySelector('input').value; // pegando o valor da caixinha de input
    if(valor == ''){ // verificando se o valor é vazio, precisa ser um número
        alert('Digite um número válido');
    } else {
        numero.innerHTML = parseInt(numero.innerHTML) + parseInt(valor); // somando o valor da caixinha com o valor do elemento
    }
}

const remover = () => {
    const numero = document.getElementById('numero');
    const valor = document.querySelector('input').value;
    if(valor == ''){
        alert('Digite um número válido');
    } else {
        numero.innerHTML = parseInt(numero.innerHTML) - parseInt(valor);
    }
}
    

// outras maneiras de implementar as mesmas funções:
function mais2(){
    const numero = document.getElementById('numero');
    numero.innerHTML = parseInt(numero.innerHTML) + 1;
}

function menos2(){
    const numero = document.getElementById('numero');
    numero.innerHTML = parseInt(numero.innerHTML) - 1;
}