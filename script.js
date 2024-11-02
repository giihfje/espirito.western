
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
  }
  function finalizarCompra() {
    alert("Compra finalizada com sucesso!");
    carrinho = [];
    atualizarCarrinho();
  }
  
  