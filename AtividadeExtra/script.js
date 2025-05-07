// Exercício 1: Soma e quadrados com verificação
function exercicioQuadrados() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const num3 = document.getElementById("num3").value;
  
    if (num1 === "" || num2 === "" || num3 === "") {
      alert("Por favor, preencha todos os números.");
      return;
    }
  
    const numeros = [parseFloat(num1), parseFloat(num2), parseFloat(num3)];
  
    const soma = numeros.reduce((a, b) => a + b, 0);
    const quadrado1 = Math.pow.apply(null, [numeros[0], 2]);
    const quadrado2 = Math.pow.apply(null, [numeros[1], 2]);
  
    document.getElementById("resultado1").textContent =
      `A soma dos três números é: ${soma}, o quadrado do primeiro é: ${quadrado1}, e o quadrado do segundo é: ${quadrado2}`;
  }
  
  // Exercício 2: Gerar palavras com verificação
  function exercicioPalavras() {
    const ids = ["letra1", "letra2", "letra3", "letra4", "letra5"];
    const letras = [];
  
    for (let i = 0; i < ids.length; i++) {
      const letra = document.getElementById(ids[i]).value.toUpperCase();
  
      if (letra === "" || !/^[A-Z]$/.test(letra)) {
        alert("Por favor, digite uma letra válida (A-Z) em todos os campos.");
        return;
      }
  
      letras.push(letra);
    }
  
    const palavras = [];
  
    while (palavras.length < 10) {
      let palavra = "";
      for (let i = 0; i < 5; i++) {
        const indice = Math.floor(Math.random() * letras.length);
        palavra += letras[indice];
      }
      if (!palavras.includes(palavra)) {
        palavras.push(palavra);
      }
    }
  
    document.getElementById("resultado2").textContent =
      "Palavras geradas: " + palavras.join(", ");
  }
  