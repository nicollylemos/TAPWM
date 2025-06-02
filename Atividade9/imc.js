function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);
    const resultado = document.getElementById('resultado');

    if (!altura || !peso) {
        resultado.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    const imc = peso / (altura * altura);
    const classificacao = classificarIMC(imc);

    resultado.textContent = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return "Magreza (Obesidade grau 0)";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal (Obesidade grau 0)";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso (Obesidade grau I)";
    } else if (imc >= 30 && imc <= 39.9) {
        return "Obesidade (Obesidade grau II)";
    } else {
        return "Obesidade Grave (Obesidade grau III)";
    }
}
