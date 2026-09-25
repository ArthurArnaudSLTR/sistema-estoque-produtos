import { Vendavel } from "./Vendavel.js";
import { QuantidadeInvalidaException, ProdutoIndisponivelException } from "./exceptions.js";

// Classe abstrata (simulada com new.target).
// Em Java: public abstract class Product implements Vendavel
export class Product extends Vendavel {
  // Campos privados de verdade (equivalente ao "private" do Java)
  #nome;
  #preco;
  #quantidade;

  constructor(nome, preco, quantidade) {
    // Impede que alguém faça "new Product(...)" diretamente,
    // simulando uma classe abstrata do Java.
    if (new.target === Product) {
      throw new Error("Product é abstrata e não pode ser instanciada diretamente.");
    }

    // Validação: preço e quantidade não podem ser negativos
    if (preco < 0 || quantidade < 0) {
      throw new QuantidadeInvalidaException(
        "Preço e quantidade não podem ser negativos."
      );
    }

    super();
    this.#nome = nome;
    this.#preco = preco;
    this.#quantidade = quantidade;
  }

  // Getters para acessar os campos privados de fora da classe
  getNome() {
    return this.#nome;
  }

  getPreco() {
    return this.#preco;
  }

  getQuantidade() {
    return this.#quantidade;
  }

  // Método "abstrato": lança erro se a subclasse não sobrescrever.
  // Em Java: public abstract double calcularValorTotal();
  calcularValorTotal() {
    throw new Error(
      "calcularValorTotal() precisa ser implementado pela subclasse."
    );
  }

  // Método concreto, igual para todas as subclasses
  getDescricao() {
    return `Produto: ${this.#nome} | Preço: R$ ${this.#preco.toFixed(2)} | Quantidade: ${this.#quantidade}`;
  }

  // Implementação do contrato de Vendavel
  vender(quantidadeDesejada) {
    if (quantidadeDesejada > this.#quantidade) {
      throw new ProdutoIndisponivelException(
        `Quantidade indisponível. Estoque atual: ${this.#quantidade}, solicitado: ${quantidadeDesejada}.`
      );
    }
    this.#quantidade -= quantidadeDesejada;
  }

  // Sobrecarga simulada: JS não permite dois métodos com o mesmo nome,
  // então usamos um parâmetro opcional para imitar
  // aplicarDesconto(percentual) e aplicarDesconto(percentual, descontoMaximo).
  aplicarDesconto(percentual, descontoMaximo = null) {
    let desconto = this.#preco * (percentual / 100);

    if (descontoMaximo !== null && desconto > descontoMaximo) {
      desconto = descontoMaximo;
    }

    this.#preco = this.#preco - desconto;
  }
}