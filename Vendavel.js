// Em Java, isto seria:
// public interface Vendavel {
//     void vender(int quantidadeDesejada) throws ProdutoIndisponivelException;
// }
//
// JavaScript não tem interfaces nativas, então usamos esta classe apenas
// como documentação do "contrato": qualquer classe que implemente Vendavel
// deve possuir um método vender(quantidadeDesejada) que:
//   - lança ProdutoIndisponivelException se quantidadeDesejada > estoque disponível
//   - caso contrário, subtrai a quantidade vendida do estoque

export class Vendavel {
  vender(quantidadeDesejada) {
    throw new Error(
      "O método vender() precisa ser implementado pela classe que usa Vendavel."
    );
  }
}