let primeiroNumero = prompt("Digite o primeiro número:");
let segundoNumero = prompt("Digite o segundo número:");

resultadoSoma =  parseInt(primeiroNumero) +  parseInt(segundoNumero);
resultadoSubtracao =  parseInt(primeiroNumero) -  parseInt(segundoNumero);
resultadoProduto =  parseInt(primeiroNumero) *  parseInt(segundoNumero);
resultadoDivisao =  parseInt(primeiroNumero) /  parseInt(segundoNumero);
restoDivisao = parseInt(primeiroNumero) %  parseInt(segundoNumero);
alert(`Resultado da soma é:${resultadoSoma}\nResultado da subtração: ${resultadoSubtracao}\nResultado do produto: ${resultadoProduto}\nResultado da divisão: ${resultadoDivisao}\nResto da divisão: ${restoDivisao}`);
