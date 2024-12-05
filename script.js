let produtos = [
  { id: 1, nome: 'Bota Texana 1', categoria: 'botas', preco: 299.99, imagem: 'bota1.jpg' },
  { id: 2, nome: 'Bota Texana 2', categoria: 'botas', preco: 349.99, imagem: 'bota2.jpg' },
  { id: 3, nome: 'Camisa Jeans', categoria: 'roupas', preco: 99.99, imagem: 'camisa_jeans.jpg' },
  { id: 4, nome: 'Cinto de Couro', categoria: 'acessorios', preco: 89.99, imagem: 'cinto_couro.jpg' }
];

let carrinho = [];

function loadProducts() {
  const produtosList = document.getElementById("produtos-list");
  produtosList.innerHTML = '';  // Limpar lista de produtos

  produtos.forEach(produto => {
    const divProduto = document.createElement('div');
    divProduto.classList.add('produto');
    divProduto.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
    `;
    produtosList.appendChild(divProduto);
  });
}

function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id);
  carrinho.push(produto);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const itensCarrinho = document.getElementById("itens-carrinho");
  itensCarrinho.innerHTML = ''; // Limpar lista de itens

  let total = 0;
  carrinho.forEach(item => {
    const li = document.createElement("li");
    
    itensCarrinho.appendChild(li);
    total += item.preco;
  });

  
}

function finalizarCompra() {
  if (carrinho.length === 0) {
    alert("Carrinho vazio! Adicione produtos para continuar.");
    return;
  }

  alert("Compra finalizada com sucesso!");
  carrinho = []; // Limpar carrinho após a compra
  atualizarCarrinho();
}

function searchProducts() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const produtosFiltrados = produtos.filter(produto =>
    produto.nome.toLowerCase().includes(query) || produto.categoria.toLowerCase().includes(query)
  );
  
  const produtosList = document.getElementById("produtos-list");
  produtosList.innerHTML = '';  // Limpar lista de produtos

  produtosFiltrados.forEach(produto => {
    const divProduto = document.createElement('div');
    divProduto.classList.add('produto');
    divProduto.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>R$ ${produto.preco.toFixed(2)}</p>
      <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
    `;
    produtosList.appendChild(divProduto);
  });
}

function filterCategory(categoria) {
  const produtosFiltrados = produtos.filter(produto => produto.categoria === categoria);
  
  const produtosList = document.getElementById("produtos-list");
  produtosList.innerHTML = '';  // Limpar lista de produtos
}
  