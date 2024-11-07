const produtos = [
  { id: 1, nome: "Bota Texana 1", cor: "marrom", preco: 299.99, imagem: "./imagem/texana_feminina.jpg" },
  { id: 2, nome: "Bota Texana 2", cor: "brilho", preco: 349.99, imagem: "./imagem/image.png" },
  { id: 3, nome: "Bota Texana 3", cor: "brilho", preco: 379.99, imagem: "./imagem/image copy.png" },
  { id: 4, nome: "Bota Texana 4", cor: "Infantil", preco: 100.00, image:"imagem copy/_.jpeg"},
  { id: 5, nome: "Bota Texana 5", cor: "Infantil", preco: 90.00, image:"imagem copy/Botas Texana Feminina Amazonas - Creme _ 37.jpeg"},
  { id: 6, nome: "Bota Texana 6", cor: "Infantil", preco: 88.87, image:"imagem copy/Footwear (1).jpeg"},
  { id: 7, nome: "Bota Texana 7", cor: "Infantil", preco: 95.98, image:"imagem copy/Bota Texana Infantil Bordada Zíper Antiderrapante Conforto - Free Jump.jpeg"},
  { id: 8, nome: "Bota Texana 8", cor: "Infantil", preco: 89.90, image:"imagem copy/Botas vaqueras niños niñas bebés primeros pasos unisex con plataforma botines infantil moda café marrón negra 12mx-21mx ecopiel elegante cowbow chelsea flores detalles de calidad.jpeg"},
  { id: 9, nome: "Bota Texana 9", cor: "Infantil", preco: 120.40, image:"imagem copy/Footwear.jpeg"},
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