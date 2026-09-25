// Composição: Estoque TEM UMA lista de Product, não herda de Product.
export class Estoque {
  #produtos;

  constructor() {
    this.#produtos = [];
  }

  adicionarProduto(produto) {
    this.#produtos.push(produto);
  }

  // Propaga ProdutoIndisponivelException se ocorrer
  venderProduto(indice, quantidade) {
    this.#produtos[indice].vender(quantidade);
  }

  // Polimorfismo: cada produto calcula do seu próprio jeito
  calcularValorTotalEstoque() {
    let total = 0;
    for (const produto of this.#produtos) {
      total += produto.calcularValorTotal();
    }
    return total;
  }

  getProdutos() {
    return this.#produtos;
  }
}