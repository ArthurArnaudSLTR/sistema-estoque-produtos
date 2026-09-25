# sistema-estoque-produtos

O projeto foi feito adaptando alguns conceitos de Java para um maior aproveito dos meus estudos em JavaScript e Node.js.

Programa que simula o controle de estoque de uma loja, cadastrando produtos de tipos diferentes (comuns e perecíveis), controlando vendas e tratando erros de forma organizada.

## O que você precisa pra rodar:

Só o **Node.js** instalado na máquina (qualquer versão recente já funciona, pois o projeto usa apenas recursos nativos de JavaScript).

## Como rodar

Abra o terminal na pasta do projeto e rode:

\`\`\`bash
node app.js
\`\`\`

## O que o programa já mostra ao rodar

- Cadastro de 2 produtos comuns e 2 perecíveis
- Um erro sendo capturado ao tentar cadastrar produto com quantidade negativa
- Uma venda que dá certo
- Um erro sendo capturado ao tentar vender mais do que tem em estoque
- O valor total do estoque, somando os produtos mesmo com regras de cálculo diferentes

## O que dá pra mexer pra testar outras coisas

Tudo isso está no `app.js`, então é só editar os valores e rodar `node app.js` de novo:

- **Testar preço negativo**: no cadastro de qualquer produto, troque o preço por um valor negativo (ex: `new ProdutoComum("Arroz", -25.0, 50)`) — deve disparar `QuantidadeInvalidaException`.
- **Testar quantidade negativa**: mesma ideia, mas no terceiro parâmetro (ex: `new ProdutoComum("Arroz",
