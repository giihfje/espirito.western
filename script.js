const produtos = [
  
  { id: 1, nome: "Bota Texana Feminina", cor: "marrom", preco: 299.99, imagem: "./imagem/texana_feminina.jpg" },
  { id: 2, nome: "Bota Texana Masculina", cor: "preto", preco: 499.99, imagem: "./LANÇAMENTO 7M BOOTS  Novo modelo disponível para você aqui na 7M Boots_ Bota bruta é aqui!😍🤠👢.jpeg" },
  { id: 3, nome: "Bota Texana Feminina", cor: "preta", preco: 599.99, imagem: "./imagem copy/Bota Texana Country Cruz Azul.jpeg" },
  { id: 4, nome: "Bota Texana Feminina", cor: "brilho", preco: 549.99, imagem: "./imagem copy/6779fea4-a658-4557-a388-69ab4506b6c1.jpeg" },
  { id: 6, nome: "Bota Texana Feminina", cor: "marrom", preco: 899.99, imagem: "./imagem copy/Botas Cinceladas Para Mujer - 7 _ B _ Brown.jpeg" },
  { id: 7, nome: "Bota Texana Feminina", cor: "brilho", preco: 349.99, imagem: "./imagem/image.png" },
  { id: 8, nome: "Bota Texana Feminina", cor: "brilho", preco: 379.99, imagem: "./imagem/image copy.png" },
  { id: 9, nome: "Bota Texana Infantil", cor: "infantil", preco: 100.00, imagem:"./imagem copy/_.jpeg"},
  { id: 10, nome: "Bota Texana Feminina", cor: "branca", preco: 609.87, imagem:"./imagem copy/image copy 2.png"},
  { id: 11, nome: "Bota Texana Infantil", cor: "infantil", preco: 88.87, imagem:"./imagem copy/Footwear (1).jpeg"},
  { id: 12, nome: "Bota Texana Masculina", cor: "marrom", preco: 909.99, imagem: "./imagem copy/Bota Texana Masculina .jpeg" },
  { id: 14, nome: "Bota Texana Masculina", cor: "marrom", preco: 679.99, imagem: "./imagem copy/Bota Western Masculina.jpeg" },
  { id: 15, nome: "Bota Texana Masculina", cor: "marrom", preco: 398.99, imagem: "./imagem copy/-texanamas..jpeg" },
  { id: 16, nome: "Bota Texana Masculina", cor: "marrom", preco: 467.99, imagem: "./imagem copy/texanasmasbut.jpeg" },
  { id: 17, nome: "Bota Texana Masculina", cor: "marrom", preco: 346.99, imagem: "./imagem copy/7boots.jpeg" },
  { id: 18, nome: "Bota Texana Infantil", cor: "infantil", preco: 95.98, imagem:"./imagem copy/Bota Texana Infantil Bordada Zíper Antiderrapante Conforto - Free Jump.jpeg"},
  { id: 19, nome: "Bota Texana Infantil", cor: "infantil", preco: 89.90, imagem:"./imagem copy/Botas vaqueras niños niñas bebés primeros pasos unisex con plataforma botines infantil moda café marrón negra 12mx-21mx ecopiel elegante cowbow chelsea flores detalles de calidad.jpeg"},
  { id: 20, nome: "Bota Texana Infantil", cor: "infantil", preco: 120.40, imagem:"./imagem copy/Footwear.jpeg"},
  { id: 21, nome: "Bota Texana Masculina", cor: "azul", preco: 798.99, imagem: "./imagem copy/mascuAzul.jpeg"},
  { id: 22, nome: "Bota Texana Masculina", cor: "marrom", preco: 899.99, imagem: "./imagem copy/texanasmasMARR.jpeg"},
  { id: 23, nome: "Bota Texana Masculina", cor: "marrom", preco: 909.99, imagem: "./imagem copy/texanasMMA.jpeg"},
  { id: 24, nome: "Bota Texana Masculina", cor: "marrom", preco: 874.99, imagem: "./imagem copy/Bota Masculina Goyazes.jpeg"},
  { id: 25, nome: "Bota Texana Masculina", cor: "preta", preco: 986.45, imagem: "./imagem copy/texanaPreta.jpeg"},
  { id: 26, nome: "Bota Texana Masculina", cor: "marrom", preco: 469.43, imagem: "./imagem copy/texansAA.jpeg"},
  { id: 27, nome: "Bota Texana Masculina", cor: "marrom", preco: 599.89, imagem: "./imagem copy/texanas,,,,rrr.jpeg"},
  { id: 28, nome: "Bota Texana Feminina", cor: "brilho", preco: 659.99, imagem: "./imagem copy/ZULcowgirl.jpeg" },
  { id: 29, nome: "Bota Texana Feminina", cor: "branca", preco: 549.99, imagem: "./imagem copy/bRanca.jpeg" },
  { id: 30, nome: "Bota Texana Feminina", cor: "brilho", preco: 989.99, imagem: "./imagem copy/zulyy.jpeg" },
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