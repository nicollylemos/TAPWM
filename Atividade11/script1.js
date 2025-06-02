

function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    this.calcularArea = function () {
      return this.base * this.altura;
    };
  }

  document.getElementById("formRetangulo").addEventListener("submit", function (e) {
    e.preventDefault();
    const base = parseFloat(document.getElementById("base").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const ret = new Retangulo(base, altura);

    const resultado = `Base: ${ret.base}
Altura: ${ret.altura}
Área: ${ret.calcularArea()}`;

    document.getElementById("saida").textContent = resultado;
  });

  function voltar() {
    window.location.href = "index.html";
  }
