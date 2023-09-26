import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  resetForm() {
    const form = this.element;

    // Desabilita o formulário para evitar envios múltiplos
    form.disabled = true;

    // Aguarda 2 segundos antes de redefinir o formulário
    setTimeout(() => {
      form.reset();
      form.disabled = false; // Habilita o formulário novamente
    }, 100); // Ajuste o tempo de espera conforme necessário
  }
}