/* Ativar os links do menu */
const links = document.querySelectorAll(".cabecalho-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

/* Ativar itens do orçamento */

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const element = document.getElementById(parametro);
  if (element) {
    element.checked = true;
  }
}

parametros.forEach(ativarProduto);

/* Ocultar/exibir conteudo das perguntas frequentes */

const perguntas = document.querySelectorAll(".pergunta-cabecalho button");

function exibir(event) {
  const pergunta = event.currentTarget;
  const resposta = document.getElementById(
    pergunta.getAttribute("aria-controls")
  );
  resposta.classList.toggle("expanded");
  const expandida = resposta.classList.contains("expanded");
  pergunta.setAttribute("aria-expanded", expandida);
  console.log(pergunta);
}

function eventoPergunta(pergunta) {
  pergunta.addEventListener("click", exibir);
}

perguntas.forEach(eventoPergunta);
console.log(perguntas);

/* Galeria de imagens das páginas de cada bicicleta */

const galeriaImagens = document.querySelectorAll(".galeria img");
const galeria = document.querySelector(".galeria");

function trocarImagem(event) {
  const img = event.currentTarget;
  if (matchMedia("(min-width: 1000px)").matches) {
    galeria.prepend(img);
  }
}

function eventoGaleria(img) {
  img.addEventListener("click", trocarImagem);
}

galeriaImagens.forEach(eventoGaleria);

/* Animação */

if (window.SimpleAnime) {
  new SimpleAnime();
}
