import { Product } from "./Product.js";

// Em Java: public class ProdutoComum extends Product
export class ProdutoComum extends Product {
  constructor(nome, preco, quantidade) {
    super(nome, preco, quantidade);
  }

  // Sem regra especial: preço x quantidade
  calcularValorTotal() {
    return this.getPreco() * this.getQuantidade();
  }
}