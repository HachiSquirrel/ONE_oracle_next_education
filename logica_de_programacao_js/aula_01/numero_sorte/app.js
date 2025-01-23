alert('Bem vindo ao jogo do número secreto!');
let numeroSecreto = 4;
// let para adicionar a variavel
console.log(numeroSecreto);
//não irá aparecer na tela
let chute = prompt('Escolha um número entre 1 e 10:');
// prompt comando para o usuário inserir

if (numeroSecreto == chute) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
} else {
    alert('Você errou :(');
}
 // template strings: substituir aspas por acento grave (`) e inserir $ e {} onde irá se encontrar a váriavel. o + pode substituir o template strings