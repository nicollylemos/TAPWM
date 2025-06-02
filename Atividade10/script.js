// Forma 1: Objeto literal
let funcionario1 = {
  matricula: "12345",
  nome: "João Silva",
  funcao: "Desginer UX/UI"
};

// Forma 2: new Object()
let funcionario2 = new Object();
funcionario2.matricula = "23456";
funcionario2.nome = "Maria Souza";
funcionario2.funcao = "Desenvolvedora Jr";

// Forma 3: Função Construtora
function Funcionario(matricula, nome, funcao) {
  this.matricula = matricula;
  this.nome = nome;
  this.funcao = funcao;
}

let funcionario3 = new Funcionario("34567", "Carlos Lima", "Gerente de Projeto");

// Montar o resultado em texto simples
let resultado = `
Forma 1 (Objeto literal):
Matrícula: ${funcionario1.matricula}
Nome: ${funcionario1.nome}
Função: ${funcionario1.funcao}

Forma 2 (new Object):
Matrícula: ${funcionario2.matricula}
Nome: ${funcionario2.nome}
Função: ${funcionario2.funcao}

Forma 3 (Função Construtora):
Matrícula: ${funcionario3.matricula}
Nome: ${funcionario3.nome}
Função: ${funcionario3.funcao}
`;

// Exibir no elemento com id "resultado"
document.getElementById("resultado").textContent = resultado;
