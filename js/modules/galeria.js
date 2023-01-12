export default class Galeria {
  constructor(img, galeria) {
    this.galeriaImagens = document.querySelectorAll(img);
    this.galeria = document.querySelector(galeria);
    this.trocarImagem = this.trocarImagem.bind(this);
    this.eventoGaleria = this.eventoGaleria.bind(this);
  }

  trocarImagem(event) {
    const img = event.currentTarget;
    if (matchMedia('(min-width: 1000px)').matches) {
      this.galeria.prepend(img);
    }
  }

  eventoGaleria(img) {
    img.addEventListener('click', this.trocarImagem);
  }

  init() {
    if (this.galeria) {
      this.galeriaImagens.forEach(this.eventoGaleria);
    }
    return this;
  }
}
