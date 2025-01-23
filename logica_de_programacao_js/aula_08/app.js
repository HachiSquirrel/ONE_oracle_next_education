let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto ;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
}

exibirMensagemInicial();
 

//Funcões sempre precisam de um nome
function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? ' tentativas!' : ' tentativa!.';
        let mensagemTentativas = 'Você descobriu o número secreto com ' + tentativas + palavraTentativa;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById ('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('h1', 'Errou!');
            exibirTextoNaTela ('p', 'Digite um número menor.');
        }else {
            exibirTextoNaTela ('h1', 'Errou!');
            exibirTextoNaTela ('p', 'Digite um número maior.');
        }
        tentativas++;
        limparCampo();
    }
}

// precisa ter um retorno
function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 100 +1);
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value ='';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}










