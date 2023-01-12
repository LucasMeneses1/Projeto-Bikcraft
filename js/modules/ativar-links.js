export default class AtivarLinks {
  constructor(links) {
    this.links = document.querySelectorAll(links);
  }

  ativarLink(link) {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
      link.classList.add('ativo');
    }
  }

  init() {
    if (this.links) {
      this.links.forEach(this.ativarLink);
    }
    return this;
  }
}
