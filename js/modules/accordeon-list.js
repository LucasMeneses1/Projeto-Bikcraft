export default class AccordeonList {
  constructor(perguntas) {
    this.perguntas = document.querySelectorAll(perguntas);
    this.ativarPergunta = this.ativarPergunta.bind(this);
    this.eventosPerguntas = this.eventosPerguntas.bind(this);
  }

  ativarPergunta(event) {
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains('ativa');
    pergunta.setAttribute('aria-expanded', ativa);
  }

  eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', this.ativarPergunta);
  }

  init() {
    if (this.perguntas) {
      this.perguntas.forEach(this.eventosPerguntas);
    }
    return this;
  }
}
