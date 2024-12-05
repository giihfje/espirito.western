const produtos = [
  { id: 1, nome: "Bota Texana Preta", tamanho: 38, preco: 350.00, imagem: "./imagem copy/image copy 2.png" },
  { id: 2, nome: "Bota Texana Marrom", tamanho: 39, preco: 375.00, imagem: "./imagem copy/image copy 2.png" },
  { id: 3, nome: "Bota Texana Azul", tamanho: 40, preco: 390.00, imagem: "./imagem copy/image copy 2.png" },
];

let carrinho = [];

function exibirProdutos(lista = produtos) {
  const listaElement = document.getElementById("produtos-lista");
  listaElement.innerHTML = "";
  lista.forEach(produto => {
      listaElement.innerHTML += `
          <div class="produto">
              <img src="${produto.imagem}" alt="${produto.nome}">
              <h2>${produto.nome}</h2>
              <p>Tamanho: ${produto.tamanho}</p>
              <p>R$ ${produto.preco.toFixed(2)}</p>
              <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
          </div>
      `;
  });
}

function adicionarAoCarrinho(produtoId) {
  const produto = produtos.find(p => p.id === produtoId);
  carrinho.push(produto);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const carrinhoElement = document.getElementById("carrinho-itens");
  const totalElement = document.getElementById("total");
  carrinhoElement.innerHTML = "";
  let total = 0;
  carrinho.forEach(produto => {
      carrinhoElement.innerHTML += `
          <li>${produto.nome} - R$ ${produto.preco.toFixed(2)}
              <button onclick="removerDoCarrinho(${produto.id})">X</button>
          </li>
      `;
      total += produto.preco;
  });

}

function removerDoCarrinho(produtoId) {
  carrinho = carrinho.filter(p => p.id !== produtoId);
  atualizarCarrinho();
}

function filtrarProdutos() {
  const tamanho = document.getElementById("filtro-tamanho").value;
  const pesquisa = document.getElementById("pesquisa-produto").value.toLowerCase();
  const produtosFiltrados = produtos.filter(p => 
      (tamanho === "" || p.tamanho == tamanho) &&
      (pesquisa === "" || p.nome.toLowerCase().includes(pesquisa))
  );
  exibirProdutos(produtosFiltrados);
}

function finalizarCompra() {
  alert("Compra finalizada!");
  carrinho = [];
  atualizarCarrinho();
}

document.addEventListener("DOMContentLoaded", exibirProdutos);