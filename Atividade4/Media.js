let nomeAluno = prompt("Qual é o nome do aluno que você deseja adicionar as notas?");

let nota1 = prompt("Primeira nota:")
let nota2 = prompt("Segunda nota:")
let nota3 = prompt("Terceira nota:")

let mediaNotas = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3; 
alert(`A média do aluno ${nomeAluno} é ${mediaNotas}`);
