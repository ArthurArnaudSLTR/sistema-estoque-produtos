import { Estoque } from "./Estoque.js";
import { ProdutoComum } from "./ProdutoComum.js";
import { ProdutoPerecivel } from "./ProdutoPerecivel.js";
import {
  QuantidadeInvalidaException,
  ProdutoIndisponivelException,
  EstoqueException,
} from "./exceptions.js";

const estoque = new Estoque();

// Cadastro de produtos: 2 comuns e 2 perecíveis (um com diasParaVencer <= 3)
estoque.adicionarProduto(new ProdutoComum("Arroz", 25.0, 50));
estoque.adicionarProduto(new ProdutoComum("Detergente", 3.5, 100));
estoque.adicionarProduto(new ProdutoPerecivel("Iogurte", 4.0, 30, 2));
estoque.adicionarProduto(new ProdutoPerecivel("Queijo", 18.0, 10, 15));

console.log("=== Produtos cadastrados ===");
for (const produto of estoque.getProdutos()) {
  console.log(produto.getDescricao());
}

// Tentativa de cadastro inválido (quantidade negativa)
console.log("\n=== Teste: cadastro inválido ===");
try {
  new ProdutoComum("Produto Errado", 10.0, -5);
} catch (erro) {
  if (erro instanceof QuantidadeInvalidaException) {
    console.log("Erro capturado: " + erro.message);
  } else if (erro instanceof EstoqueException) {
    console.log("Erro de estoque: " + erro.message);
  } else {
    throw erro;
  }
}

// Venda válida
console.log("\n=== Teste: venda válida ===");
try {
  estoque.venderProduto(0, 10); // vende 10 unidades de Arroz
  console.log("Venda realizada com sucesso.");
  console.log(estoque.getProdutos()[0].getDescricao());
} catch (erro) {
  console.log("Erro inesperado: " + erro.message);
}

// Venda inválida (mais do que o disponível)
console.log("\n=== Teste: venda inválida ===");
try {
  estoque.venderProduto(0, 1000);
} catch (erro) {
  if (erro instanceof ProdutoIndisponivelException) {
    console.log("Erro capturado: " + erro.message);
  } else if (erro instanceof EstoqueException) {
    console.log("Erro de estoque: " + erro.message);
  } else {
    throw erro;
  }
}

// Valor total do estoque
console.log("\n=== Valor total do estoque ===");
console.log(`R$ ${estoque.calcularValorTotalEstoque().toFixed(2)}`);