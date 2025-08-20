function validar() {
      let form = document.formulario;

      // Nome
      if (form.nome.value.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres!");
        form.nome.focus();
        return false;
      }

      // Email
      if (form.email.value == "" || form.email.value.indexOf('@') == -1 || form.email.value.indexOf('.') == -1) {
        alert("Preencha o e-mail corretamente!");
        form.email.focus();
        return false;
      }

      // Comentário
      if (form.comentario.value.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres!");
        form.comentario.focus();
        return false;
      }

     // Pesquisa
let pesquisa = form.elements["pesquisa"];
if (!pesquisa[0].checked && !pesquisa[1].checked) {
  alert("Selecione uma opção na pesquisa!");
  return false;
} else {
  if (pesquisa[0].checked) {
    alert("Volte sempre a esta página!");
  } else {
    alert("Que bom que você voltou a visitar esta página!");
  }
}


      return true;
    }