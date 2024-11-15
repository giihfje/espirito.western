
const produtos = [
  {
  id: 1,
  name: "Texana Masculina Couro",
  price: 350.00,
  size: [38, 39, 40, 41, 42, 43],
  image: "./imagem copy/image copy 2.png",
},
{
  id: 2,
  name: "Texana Feminina Estilo Western",
  price: 299.00,
  size: [34, 35, 36, 37, 38],
  image: "./imagem copy/Footwear.jpeg",
},
{
  id: 3,
  name: "Texana De Couro Premium",
  price: 450.00,
  size: [39, 40, 41, 42],
  image: "./imagem copy/zulyy.jpeg",
},
];

// Carrinho de compras
let carrinho = [];

// Renderizar os produtos na tela
function renderProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Limpar a lista de produtos
}
  function exibirProdutos(produtosFiltrados = produtos) {
    const lista = document.getElementById("produtos-lista");
    lista.innerHTML = "";
    produtosFiltrados.forEach(produto => {
        const item = document.createElement("div");
        item.className = "produto";
        item.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        lista.appendChild(item);
    });
  }
// Adicionar um produto ao carrinho
function adicionarAoCarrinho(produtoId) {
  const produto = produtos.find(p => p.id === produtoId);
  const itemCarrinho = carrinho.find(item => item.id === produtoId);
  if (itemCarrinho) {
      itemCarrinho.quantidade++;
  } else {
      carrinho.push({ ...produto, quantidade: 1 });
  }
  atualizarCarrinho();
}

// Atualizar o carrinho de compras
function atualizarCarrinho() {
  const lista = document.getElementById("carrinho-itens");
  lista.innerHTML = "";
  let total = 0;
  carrinho.forEach(item => {
      total += item.preco * item.quantidade;
      const li = document.createElement("li");
      li.innerHTML = `
          ${item.nome} - ${item.quantidade} x R$ ${item.preco.toFixed(2)}
          <button onclick="removerDoCarrinho(${item.id})">Remover</button>
      `;
      lista.appendChild(li);
  });
  document.getElementById("total").innerText = total
}
function removerDoCarrinho(produtoId) {
  carrinho = carrinho.filter(item => item.id !== produtoId);
  atualizarCarrinho();
}
function finalizarCompra() {
  alert("Compra finalizada!");
  carrinho = [];
  atualizarCarrinho();
}
exibirProdutos();
  cartCount.textContent = cart.length;

  let total = 0;
  cartItems
