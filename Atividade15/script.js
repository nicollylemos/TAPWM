    // Lista de cursos direto no JS
    const cursos = [
      { id: 1, nome: "Análise e Desenvolvimento de Sistemas", descricao: "Desenvolvimento de software, banco de dados e engenharia de software." },
      { id: 2, nome: "Gestão Empresarial", descricao: "Administração, finanças, marketing e gestão de negócios." },
      { id: 3, nome: "Logística", descricao: "Cadeia de suprimentos, transporte, armazenagem e distribuição." },
      { id: 4, nome: "Polímeros", descricao: "Materiais poliméricos, sua fabricação e aplicações industriais." }
    ];

    // Preenche o select
    const select = document.getElementById("cursos");
    cursos.forEach(c => {
      const opt = document.createElement("option");
      opt.value = c.id;
      opt.textContent = c.nome;
      select.appendChild(opt);
    });

    function selecionarCurso(){
      const id = select.value;
      if(!id) return;
      const curso = cursos.find(c => c.id == id);
      if(!curso) return;

      const ok = confirm(`Deseja abrir informações sobre o curso:\n\n${curso.nome}?`);
      if(ok){
        // abre em nova janela passando os dados via query string
        window.open(`curso.html?id=${curso.id}`, "cursoWindow", "width=600,height=300");
      }else{
        select.value = "";
      }
    }