alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 7;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while(chute!= numeroSecreto){
     chute = prompt('Escolha um número entre 1 e 10')
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

if(tentativas > 1) {
    alert('Parabéns!!! O número secreto é ' + numeroSecreto + ', você acertou com ' + tentativas + ' tentativas.');
} else {
    alert('Parabéns!!! O número secreto é ' + numeroSecreto + ', você acertou com ' + tentativas + ' tentativa.');
}
//Operadores de comparação: != Não é igual , == é igual, > maior, < menor, >= maior ou igual, <= menor ou igual
