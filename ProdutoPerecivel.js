import { Product } from "./Product.js";

// Em Java: public class ProdutoPerecivel extends Product
export class ProdutoPerecivel extends Product {
  #diasParaVencer;

  constructor(nome, preco, quantidade, diasParaVencer) {
    super(nome, preco, quantidade);
    this.#diasParaVencer = diasParaVencer;
  }

  getDiasParaVencer() {
    return this.#diasParaVencer;
  }

  // 20% de desconto automático se faltar 3 dias ou menos para vencer
  calcularValorTotal() {
    const total = this.getPreco() * this.getQuantidade();
    if (this.#diasParaVencer <= 3) {
      return total * 0.8;
    }
    return total;
  }

  // Sobrescreve para incluir a validade na descrição
  getDescricao() {
    return `${super.getDescricao()} | Dias para vencer: ${this.#diasParaVencer}`;
  }
}