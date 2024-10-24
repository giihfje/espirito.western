
// Variáveis globais
let carrinho = [];
let produtos = [
  { id: 1, nome: "Texana 1", preco: 50.00, imagem: "img/texana.avif" },
  { id: 2, nome: "Texana 2", preco: 70.00, imagem: "img/texana2.jpg" },
  // Adicione mais produtos aqui
];

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(id) {
  const produto = produtos.find((produto) => (link unavailable) === id);
  carrinho.push(produto);
  atualizarCarrinho();
}

// Função para remover produto do carrinho
function removerDoCarrinho(id) {
  carrinho = carrinho.filter((produto) => (link unavailable) !== id);
  atualizarCarrinho();
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
  const carrinhoHtml = document.querySelector(".carrinho");
  carrinhoHtml.innerHTML = "";
  carrinho.forEach((produto) => {
    const produtoHtml = `
      <div>
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
        <button onclick="removerDoCarrinho(${(link unavailable)})">Remover</button>
      </div>
    `;
    carrinhoHtml.innerHTML += produtoHtml;
  });
}

// Função para calcular o total do carrinho
function calcularTotal() {
  const total = carrinho.reduce((acumulado, produto) => acumulado + produto.preco, 0);
  return total;
}

// Função para finalizar a compra
function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio!");
  } else {
    const total = calcularTotal();
    alert(`Total: R$ ${total}`);
    // Implemente a lógica de pagamento aqui
  }
}

// Adicione eventos aos botões de compra
document.querySelectorAll(".comprar").forEach((botao) => {
  botao.addEventListener("click", (e) => {
    const id = (link unavailable);
    adicionarAoCarrinho(id);
  });
});

// Adicione evento ao botão de finalizar compra
document.querySelector(".finalizar-compra").addEventListener("click", finalizarCompra);