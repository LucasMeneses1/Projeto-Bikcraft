export default class AtivarItensOrcamento {
  constructor() {
    this.parametros = new URLSearchParams(location.search);
  }

  ativarProduto(parametro) {
    const element = document.getElementById(parametro);
    if (element) {
      element.checked = true;
    }
  }

  init() {
    if (this.parametros) {
      this.parametros.forEach(this.ativarProduto);
    }
    return this;
  }
}
