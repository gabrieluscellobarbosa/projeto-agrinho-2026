// Declara as const
const botao = document.querySelector('.botão-menu')
const menuLateral = document.querySelector('.menu-lateral')
const fechar = document.querySelector('.fechar-menu')
const btnAumentar = document.getElementById('aumentar-fonte');
const btnDiminuir = document.getElementById('diminuir-fonte');
const corpoTexto = document.body
const btncontraste = document.getElementById('btn-contraste');

// Define escala inicial do site

let escalaAtual = 16;

// Faz os botões de abrir e fechar menu funcionarem ao serem clicados

botao.addEventListener('click', () => {
    botao.classList.add('ativo')
    menuLateral.classList.add('ativo')
    fechar.classList.add('ativo')
})
fechar.addEventListener('click', () => {
    botao.classList.remove('ativo')
    menuLateral.classList.remove('ativo')
    fechar.classList.remove('ativo')
})

// Faz os botões de aumentar e diminuir a fonte funcionem ao serem clicados  

btnAumentar.addEventListener('click', () => {
    if (escalaAtual < 30) {
        escalaAtual += 2;
        document.documentElement.style.fontSize = escalaAtual + 'px';
    }
}); 
btnDiminuir.addEventListener('click', () => {
    if (escalaAtual > 12) {
        escalaAtual -= 2;
        document.documentElement.style.fontSize = escalaAtual + 'px';
    }
});

// Faz o botão de alterar tema claro/escuro funcionar ao ser clicado

btncontraste.addEventListener('click', () => {
    corpoTexto.classList.toggle('contraste')
    botao.classList.toggle('contraste')
    fechar.classList.toggle('contraste')
    menuLateral.classList.toggle('contraste')
    
});