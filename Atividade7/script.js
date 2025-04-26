function verificarTriangulo(){
    const ladoA = parseFloat(document.getElementById("ladoA").value);
    const ladoB = parseFloat(document.getElementById("ladoB").value);
    const ladoC = parseFloat(document.getElementById("ladoC").value);    
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = ""; // Limpa o resultado anterior
    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC)) {
        resultado.innerHTML = "Por favor, informe números válidos para os lados do triângulo.";

    }
    else{
        resultado.innerHTML = ""; // Limpa o resultado anterior
    
    if( ladoA > Math.abs(ladoB - ladoC) && ladoA < ladoB + ladoC &&
    ladoB > Math.abs(ladoA - ladoC) && ladoB < ladoA + ladoC &&
    ladoC > Math.abs(ladoA - ladoB) && ladoC < ladoA + ladoB)
    {
    if(ladoA == ladoB && ladoB == ladoC && ladoA == ladoC){
        resultado.innerHTML = "O triângulo é equilátero.";
    }
    else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        resultado.innerHTML = "O triângulo é isósceles.";
    }
    else if(ladoA != ladoB && ladoA != ladoC && ladoB != ladoC){
        resultado.innerHTML = "O triângulo é escaleno.";
    }
    else if(ladoA <= 0 || ladoB <= 0 || ladoC <= 0){
        resultado.innerHTML = "Os lados do triângulo devem ser maiores que zero.";
    }
    }
    else{
        resultado.innerHTML = "Os lados informados não formam um triângulo.";
    }
 }

}


