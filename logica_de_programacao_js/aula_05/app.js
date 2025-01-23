alert('Boas vindas ao jogo do número secreto');
// Para gerar uma número inteiro aleatório até 100
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while(chute!= numeroSecreto){
     chute = prompt('Escolha um número entre 1 e ' + numeroMaximo) ;
      // se o chute for igual ao número secreto
    if (chute == numeroSecreto) {
        //PARAR!
        break;
    } else {
        // se o número secreto for maior que o chute
        if (numeroSecreto > chute) {
            alert('O número secreto é maior que ' + chute);
        } else {
            // se o número secreto for menor que o chute
            alert('O número secreto é menor que ' + chute);
        }
         // incrementar o número de tentativas
            tentativas ++;
        
    }
};
// Operador Ternário
let palavraTentativa = tentativas > 1 ? ' tentativas.' : ' tentativa.';
alert('Parabéns!!! O número secreto é ' + numeroSecreto + ', você acertou com ' + tentativas + palavraTentativa);
