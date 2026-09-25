// Exceção base do sistema de estoque.
// Em Java: public class EstoqueException extends Exception
export class EstoqueException extends Error {
  constructor(mensagem) {
    super(mensagem);
    this.name = "EstoqueException";
  }
}

// Lançada quando preço ou quantidade são negativos.
export class QuantidadeInvalidaException extends EstoqueException {
  constructor(mensagem) {
    super(mensagem);
    this.name = "QuantidadeInvalidaException";
  }
}

// Lançada quando se tenta vender mais do que há em estoque.
export class ProdutoIndisponivelException extends EstoqueException {
  constructor(mensagem) {
    super(mensagem);
    this.name = "ProdutoIndisponivelException";
  }
}