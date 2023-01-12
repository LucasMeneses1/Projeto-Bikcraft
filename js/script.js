import AtivarLinks from './modules/ativar-links.js';
import AtivarItensOrcamento from './modules/ativar-itens-orcamento.js';
import AccordeonList from './modules/accordeon-list.js';
import Galeria from './modules/galeria.js';
import MenuMobile from './modules/menu-mobile.js';

/* Ativar os links do menu */
const ativarLinks = new AtivarLinks('.cabecalho-menu a');
ativarLinks.init();

/* Ativar itens do orçamento */
const ativarItensOrcamento = new AtivarItensOrcamento();
ativarItensOrcamento.init();

/* Accordeon List */
const accordeonList = new AccordeonList('.perguntas button');
accordeonList.init();

/* Galeria de imagens das páginas de cada bicicleta */
const galeria = new Galeria('.galeria img', '.galeria');
galeria.init();

/* Menu mobile */
const menuMobile = new MenuMobile(
  "[data-menu='button']",
  '[data-menu="list"]',
  ['touchstart', 'click'],
  'ativo',
);
menuMobile.init();

/* Animação */
if (window.SimpleAnime) {
  new SimpleAnime();
}
