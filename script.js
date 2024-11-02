
function adicionarAoCarrinho(id) {
    let produto = produtos.find(p => (link) === id);
    carrinho.push(produto);
    alert(`Produto adicionado ao carrinho: ${produto.nome}`);
    atuali
    zarCarrinho();
  }

  function removerDoCarrinho(id) {
    let index = carrinho.findIndex(p => (link) === id);
    carrinho.splice(index, 1);
    atualizarCarrinho();
  }

  function atualizarCarrinho() {
    let total = 0;
    carrinho.forEach(produto => {
      total += produto.preco;
    });
    document.getElementById("total").innerText = `Total: R$ ${total.toFixed(2)}`;
    document.getElementById("carrinho").innerHTML = "";
    carrinho.forEach(produto => {
      let item = document.createElement("li");
      item.innerText = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
      document.getElementById("carrinho").appendChild(item);
    });
  }
  function finalizarCompra() {
    alert("Compra finalizada com sucesso!");
    carrinho = [];
    atualizarCarrinho();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    produtos.forEach(produto => {
      let item = document.createElement("div");
      item.innerHTML = `
        <img src="${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <p>R$ ${produto.preco.toFixed(2)}</p>
        <button onclick="adicionarAoCarrinho(${(link)})">Adicionar ao carrinho </button>
      `;
      document.getElementById("produtos").appendChild(item);
    });
  });  