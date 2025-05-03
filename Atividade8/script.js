function maiorNumero(){
    const primeiroNumero = parseInt(document.getElementById("primeiroNumero").value);
    const segundoNumero = parseInt(document.getElementById("segundoNumero").value);
    const terceiroNumero = parseInt(document.getElementById("terceiroNumero").value);
    const resultadoMaiorNumero = document.getElementById("resultadoMaiorNumero");

      // Verificação de entrada
    if (isNaN(primeiroNumero) || isNaN(segundoNumero) || isNaN(terceiroNumero)) {
        resultadoMaiorNumero.innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }
    else if(primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero){
       resultadoMaiorNumero.innerHTML = "O maior número é: " + primeiroNumero;
    }
    else if(segundoNumero > primeiroNumero && segundoNumero > terceiroNumero){
        resultadoMaiorNumero.innerHTML = "O maior número é: " + segundoNumero;
    }
    else if(terceiroNumero > primeiroNumero && terceiroNumero > segundoNumero){
        resultadoMaiorNumero.innerHTML = "O maior número é: " + terceiroNumero;
    }
    else{
        resultadoMaiorNumero.innerHTML = "Os números são iguais!";
    }
}

function ordemCrescente(){
    const primeiroNumero = parseInt(document.getElementById("primeiroValor").value);
    const segundoNumero = parseInt(document.getElementById("segundoValor").value);
    const terceiroNumero = parseInt(document.getElementById("terceiroValor").value);
    const resultadoOrdemCrescente = document.getElementById("resultadoOrdemCrescente");

    if (isNaN(primeiroNumero) || isNaN(segundoNumero) || isNaN(terceiroNumero)) {
        resultadoOrdemCrescente.innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }
    else if( primeiroNumero < segundoNumero && primeiroNumero < terceiroNumero && segundoNumero < terceiroNumero){
        resultadoOrdemCrescente.innerHTML = "A ordem crescente é: " + primeiroNumero + ", " + segundoNumero + ", " + terceiroNumero;
    }
    else if(primeiroNumero < terceiroNumero && terceiroNumero < segundoNumero && primeiroNumero < segundoNumero){
        resultadoOrdemCrescente.innerHTML = "A ordem crescente é: " + primeiroNumero + ", " + terceiroNumero + ", " + segundoNumero;
    }
    else if(segundoNumero < primeiroNumero && primeiroNumero < terceiroNumero && segundoNumero < terceiroNumero){
        resultadoOrdemCrescente.innerHTML = "A ordem crescente é: " + segundoNumero + ", " + primeiroNumero + ", " + terceiroNumero;
    }
    else if(segundoNumero < terceiroNumero && terceiroNumero < primeiroNumero && segundoNumero < primeiroNumero){
        resultadoOrdemCrescente.innerHTML = "A ordem crescente é: " + segundoNumero + ", " + terceiroNumero + ", " + primeiroNumero;
    }
    else if(terceiroNumero < primeiroNumero && primeiroNumero < segundoNumero && terceiroNumero < segundoNumero){
        resultadoOrdemCrescente.innerHTML = "A ordem crescente é: " + terceiroNumero + ", " + primeiroNumero + ", " + segundoNumero;
    }
    else if(terceiroNumero < segundoNumero && segundoNumero < primeiroNumero && terceiroNumero < primeiroNumero){
        resultadoOrdemCrescente.innerHTML = "A ordem crescente é: " + terceiroNumero + ", " + segundoNumero + ", " + primeiroNumero;
    }
    else{
        resultadoOrdemCrescente.innerHTML = "<p>Os números são iguais!</p>";
    }
}

function verificarPalindromo() {
    const palavra = document.getElementById("palavra").value;
    const resultadoPalindromo = document.getElementById("resultadoPalindromo");

    // Verificação de entrada
    if (palavra.trim() === "") {
        resultadoPalindromo.innerHTML = "Por favor, preencha o campo corretamente.";
        return;
    }

    const palavraInvertida = palavra.split("").reverse().join("");
    if (palavra.replace(/\s+/g, "") === palavraInvertida.replace(/\s+/g, "")) {
        resultadoPalindromo.innerHTML = "A palavra é um palíndromo!";
    } else {
        resultadoPalindromo.innerHTML = "A palavra não é um palíndromo!";
    }
    
}

function verificarSubconjunto(palavra1, palavra2) {
    const resultado = document.getElementById("resultadoReceberPalavras");

    // Verificar se uma das palavras é vazia ou undefined
    if (!palavra1 || !palavra2) {
        resultado.innerHTML = "Erro: uma ou ambas as palavras são vazias ou undefined.";
        return;
    }

    // Verificar se a palavra2 é subconjunto da palavra1
    if (palavra1.includes(palavra2)) {
        resultado.innerHTML = `"${palavra2}" é um subconjunto de "${palavra1}".`;
    } else {
        resultado.innerHTML = `"${palavra2}" não é um subconjunto de "${palavra1}".`;
    }
}
