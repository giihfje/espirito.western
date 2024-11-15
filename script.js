const products = [
  { 
      id: 1, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
  { 
      id: 2, 
      name: "Texana Country", 
      image: "https://via.placeholder.com/300x300?text=Texana+2", 
      price: 420, 
      sizes: [37, 38, 40, 42, 43]
  },
  { 
      id: 3, 
      name: "Texana Premium", 
      image: "https://via.placeholder.com/300x300?text=Texana+3", 
      price: 500, 
      sizes: [39, 40, 41, 42, 44]
  },
  { 
      id: 4, 
      name: "Texana Casual", 
      image: "https://via.placeholder.com/300x300?text=Texana+4", 
      price: 310, 
      sizes: [36, 37, 38, 40]
  },
  { 
      id: 5, 
      name: "Texana Luxo", 
      image: "https://via.placeholder.com/300x300?text=Texana+5", 
      price: 620, 
      sizes: [40, 41, 42, 43]
  },
  { 
      id: 6, 
      name: "Texana Customizada", 
      image: "https://via.placeholder.com/300x300?text=Texana+6", 
      price: 800, 
      sizes: [38, 39, 40, 41, 44]
  },
{ 
      id: 7, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 8, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 9, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 10, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 11, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 12, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 13,
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 14, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 16, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 17, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 18, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 19, 
      name: "Texana Tradicional", 
      image: "./imagem copy/image copy.png", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 20, 
      name: "Texana Infantil", 
      image: "./imagem copy/Footwear.jpeg", 
      price: 90,
      sizes: [10, 12, 16 , 22, 24]
  },
];

let carrinho = [];
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
function filtrarProdutos() {
  const cor = document.getElementById("filtro-cor").value;
  const termoPesquisa = document.getElementById("pesquisa-produto").value.toLowerCase();
  const produtosFiltrados = produtos.filter(p =>
      (cor === "" || p.cor === cor) &&
      (termoPesquisa === "" || p.nome.toLowerCase().includes(termoPesquisa))
  );
  exibirProdutos(produtosFiltrados);
}
function finalizarCompra() {
  alert("Compra finalizada!");
  carrinho = [];
  atualizarCarrinho();
}
exibirProdutos();