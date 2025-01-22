let listaDeNumeroSorteados=[];
let numeroLimite = 10;
let numeroSecreto =gerarNumeroAleatorio();
let tentativas=1;

//função para alterar de forma dinamica o texto na tela do usuário
function exibirTextoNaTela(tag,texto){
    let campo =document.querySelector(tag);
    campo.innerHTML=texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

function exibirMensagemInicial(){
    //vai exibir o texto na tela do usuário
    exibirTextoNaTela('h1','Jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número de 1 e 10')
}

//vai verificar se o número que o usuário digitou é igual ao número secreto
function verificarChute(){
    let chute=document.querySelector('input').value;
    
    if(chute==numeroSecreto){
        exibirTextoNaTela('h1','Acertou');
        let palavaraTentatativa=tentativas > 1 ?'tentativas':'tentativa';
        let mensagemTetativas=`Você descobriu o número secreto com ${tentativas} ${palavaraTentatativa}`;
        exibirTextoNaTela('p',mensagemTetativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute>numeroSecreto){
            exibirTextoNaTela('p',' o número secreto é menor');
        }else{
            exibirTextoNaTela('p','O número secreto é maior');
        }
        //vai incrementar o número de tentativas
        tentativas++;
        limparCampo();
    }
}
//limpar o campo enquanto o numero estiver errrado
function limparCampo(){
    chute=document.querySelector('input')
    chute.value='';
}

//essa função vai me retornar um número aleatorio na minha variavel numeroSecreto
function gerarNumeroAleatorio() {
    let numeroEscolhido= parseInt(Math.random () * 10 + 1)
    let quantidadeElementosNaLissta=listaDeNumeroSorteados.length;
    
    if(quantidadeElementosNaLissta ==3){
        listaDeNumeroSorteados=[];
    }

    if(listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados);
        return numeroEscolhido;
    }
}

function reiniciarJogo(){
    numeroSecreto=gerarNumeroAleatorio();
    limparCampo();
    tentativas=1;
    exibirMensagemInicial();
    //vai desabilitar o botão de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

exibirMensagemInicial();