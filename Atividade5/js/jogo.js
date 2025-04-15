function iniciarJogo(escolhaJogador) {

const escolhaComputador = Math.floor(Math.random() * 3);

const opcoes = ["Pedra", "Papel", "Tesoura"];
document.getElementById("suaEscolha").innerHTML = "<strong>Você escolheu:</strong> " + opcoes[escolhaJogador];
document.getElementById("escolhaComputador").innerHTML = "<strong>O computador escolheu:</strong> " + opcoes[escolhaComputador];


   let resultado = "";

   if (escolhaJogador === escolhaComputador) {
       resultado = "Empate! Ambos escolheram " + opcoes[escolhaJogador] + ".";
   } else if (
       (escolhaJogador === 0 && escolhaComputador === 2) ||
       (escolhaJogador === 1 && escolhaComputador === 0) ||
       (escolhaJogador === 2 && escolhaComputador === 1)
   ) {
       resultado = "Você ganhou! " + opcoes[escolhaJogador] + " vence " + opcoes[escolhaComputador] + ".";
   } else {
       resultado = "Você perdeu! " + opcoes[escolhaComputador] + " vence " + opcoes[escolhaJogador] + ".";
   }

   document.getElementById("resultado").innerHTML = resultado;
}
