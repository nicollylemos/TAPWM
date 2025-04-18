let i = 0;  // Contador global de respostas
let respostas = [];  // Array global para armazenar as respostas

// Função de contador, chamada quando o formulário é enviado
document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault(); 
    const idade = parseInt(document.getElementById("idade").value);
    const sexo = document.getElementById("sexo").value;
    const opiniao = parseInt(document.getElementById("opiniao").value);
    
    // Adicionar a nova resposta ao array global
    respostas.push({ idade, sexo, opiniao });
    i++;
    document.getElementById("contador").innerHTML = "<span>" + i + "/45</span>"; 

    if (respostas.length === 45) {
        alert("Você atingiu o limite de 45 respostas.");
        document.getElementById("formulario").querySelector("button[type='submit']").disabled = true;

    }
    document.getElementById("formulario").reset();
});

// Função para mostrar a visão geral das respostas
function visaoGeral() {
    if (respostas.length === 0) {
        alert("Ainda não há respostas para mostrar.");
        return;
    }

    let somaIdades=0;
    let pessoaMaisVelha=0;
    let pessoaMaisNova=0;
    let respostaPessimo=0;
    let respostaBom=0;
    let respostaOtimo=0;
    let mulheres=0;
    let homens=0;
    let outros=0;
    // Somar as idades para calcular a média
    for (let j = 0; j < respostas.length; j++) {
        //média das idades
        somaIdades += respostas[j].idade;
        //pessoa mais velha
        if(respostas[j].idade > pessoaMaisVelha){
            pessoaMaisVelha = respostas[j].idade;
        }
        //pessoa mais nova
        if(respostas[j].idade < pessoaMaisNova || pessoaMaisNova === 0){
            pessoaMaisNova = respostas[j].idade;
        }
        if(respostas[j].opiniao === 1){
            respostaPessimo++;
        }
        if(respostas[j].opiniao == 3){
            respostaBom++;
        }
        if(respostas[j].opiniao == 4){
            respostaOtimo++;
        }
        if(respostas[j].sexo == 'F'){
            mulheres++;
        }
        if(respostas[j].sexo == 'M'){
            homens++;
        }
        if(respostas[j].sexo == 'O'){
            outros++;
        }


    }
    const porcentagemOpiniao = ((respostaOtimo + respostaBom) / respostas.length) * 100;

    // Calcular a média das idades
    const mediaIdade = somaIdades / respostas.length;

    // Exibir a média das idades
    document.getElementById("resultado").innerHTML = `
    <p><strong>Média das idades:</strong> ${mediaIdade.toFixed(0)}</p>
    <p><strong>Pessoa mais velha:</strong> ${pessoaMaisVelha}</p>
    <p><strong>Pessoa mais nova:</strong> ${pessoaMaisNova}</p>
    <p><strong>Porcentagem de opiniões BOM e ÓTIMO:</strong> ${porcentagemOpiniao.toFixed(2)}%
    </p>
     <p><strong>Mulheres que responderam:</strong> ${mulheres}
    </p>
      <p><strong>Homens que responderam:</strong> ${homens}
    </p>
      <p><strong>Outros que responderam:</strong> ${outros}
    </p>
`;

// Mostra o modal
document.getElementById("modal").style.display = "block";

}


function fecharModal() {
    document.getElementById("modal").style.display = "none";
  }