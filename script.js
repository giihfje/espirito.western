const products = [
  { id: 21, nome: "Bota Texana Masculina", cor: "azul", preco: 798.99, imagem: "./imagem copy/mascuAzul.jpeg",
    sizes: [36, 37, 38, 40]
  },
  { id: 22, nome: "Bota Texana Masculina", cor: "marrom", preco: 899.99, imagem: "./imagem copy/texanasmasMARR.jpeg",
    sizes: [36, 37, 38, 40]
  },
  { id: 23, nome: "Bota Texana Masculina", cor: "marrom", preco: 909.99, imagem: "./imagem copy/texanasMMA.jpeg",
    sizes: [36, 37, 38, 40]
  },
  { id: 24, nome: "Bota Texana Masculina", cor: "marrom", preco: 874.99, imagem: "./imagem copy/Bota Masculina Goyazes.jpeg",
    sizes: [36, 37, 38, 40]
  },
  { id: 25, nome: "Bota Texana Masculina", cor: "preta", preco: 986.45, imagem: "./imagem copy/texanaPreta.jpeg",
    sizes: [36, 37, 38, 40]
  },
  { id: 26, nome: "Bota Texana Masculina", cor: "marrom", preco: 469.43, imagem: "./imagem copy/texansAA.jpeg",
    sizes: [36, 37, 38, 40]
  },
  { id: 27, nome: "Bota Texana Masculina", cor: "marrom", preco: 599.89, imagem: "./imagem copy/texanas,,,,rrr.jpeg",
    sizes: [36, 37, 38, 40]
  },
  { id: 28, nome: "Bota Texana Feminina", cor: "brilho", preco: 659.99, imagem: "./imagem copy/ZULcowgirl.jpeg",
    sizes: [36, 37, 38, 40]
   },
  { id: 29, nome: "Bota Texana Feminina", cor: "branca", preco: 549.99, imagem: "./imagem copy/bRanca.jpeg",
    sizes: [36, 37, 38, 40]
   },
  { id: 30, nome: "Bota Texana Feminina", cor: "brilho", preco: 989.99, imagem: "./imagem copy/zulyy.jpeg",
    sizes: [36, 37, 38, 40]
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