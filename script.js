// Lista de produtos com várias botas texanas
const produtos = [
  { nome: 'Bota Texana Preta', preco: 299, imagem: 'bota1.jpg' },
  { nome: 'Bota Texana Marrom', preco: 329, imagem: 'bota2.jpg' },
  { nome: 'Bota Texana Azul', preco: 359, imagem: 'bota3.jpg' },
  { nome: 'Bota Texana Vermelha', preco: 389, imagem: 'bota4.jpg' },
  { nome: 'Bota Texana Branca', preco: 279, imagem: 'bota5.jpg' },
  { nome: 'Bota Texana Cinza', preco: 315, imagem: 'bota6.jpg' }
];

let carrinho = [];
let total = 0;

// Função para carregar os produtos na página
function carregarProdutos() {
  const produtosLista = document.getElementById('produtos-lista');
  produtos.forEach(produto => {
      const divProduto = document.createElement('div');
      divProduto.classList.add('produto');
      divProduto.innerHTML = `
          <img src="${produto.imagem}" alt="${produto.nome}">
          <h2>${produto.nome}</h2>
          <p>R$ ${produto.preco.toFixed(2)}</p>
          <button onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">Comprar</button>
      `;
      produtosLista.appendChild(divProduto);
  });
}

// Função para adicionar itens ao carrinho
function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  total += preco;
  atualizarCarrinho();
}


// Função para finalizar a compra
function finalizarCompra() {
  if (carrinho.length === 0) {
      alert('O carrinho está vazio!');
  } else {
      carrinho = [];
      total = 0;
      atualizarCarrinho();
  }
}

// Carrega os produtos ao carregar a página
window.onload = carregarProdutos;