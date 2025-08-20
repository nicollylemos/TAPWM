function transformarTexto() {
      let campo = document.forms.formulario1.elements["idTexto"];
      let opcao = document.forms.formulario1.elements["opcao"];

      if (opcao[0].checked) {
        campo.value = campo.value.toUpperCase();
      } else if (opcao[1].checked) {
        campo.value = campo.value.toLowerCase();
      }
    }