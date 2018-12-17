const template = document.querySelector('#animated-list');

class AnimatedTitle extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('animated-title', AnimatedTitle);
