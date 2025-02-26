 // Animações com JS
 let position = -150;  // Posição inicial para os outros elementos (título, descrição, botões)
 let imagePosition = 900;  // Posição inicial da imagem fora da tela à direita

 const titulo = document.getElementById('titulo');
 const descricao = document.getElementById('descricao');
 const image = document.getElementsByClassName('image')[0];
 const btn = document.getElementsByClassName('btn')[0];

 // Função que realiza a animação
 function move() {
     // Mover os outros elementos (título, descrição, botões) da esquerda para a direita
     if (position < 0) {
         position += 3;
         titulo.style.left = position + 'px';
         descricao.style.left = position + 'px';
         btn.style.left = position + 'px';
     }


     // Continuar a animação
     requestAnimationFrame(move);
 }

 move();  // Inicia a animação


 function scrollWin() {
    window.scrollTo(500, 0);
}