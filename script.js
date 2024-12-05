function exibirProdutos(produtosFiltrados = produtos) {
  const lista = document.getElementById("produtos-lista");
  lista.innerHTML = "";
  produtosFiltrados.forEach(produto => {
      const item = document.createElement("div");
      item.className = "produto";
      item.innerHTML = `
          <img src="./imagem copy/image copy 2.png" alt="${produto.nome}">
          <h2>${produto.nome}</h2>
          <p>R$ ${produto.preco.toFixed(2)}</p>
          <label for="tamanho-${produto.id}">Tamanho:</label>
          <select id="tamanho-${produto.id}">
              <option value="P">P</option>
              <option value="M">M</option>
              <option value="G">G</option>
              <option value="GG">GG</option>
          </select>
          <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
      `;
      lista.appendChild(item);
  });
}

function adicionarAoCarrinho(produtoId) {
  const produto = produtos.find(p => p.id === produtoId);
  const tamanho = document.getElementById(`tamanho-${produtoId}`).value; // Pega o tamanho selecionado
  const itemCarrinho = carrinho.find(item => item.id === produtoId && item.tamanho === tamanho);
  
  if (itemCarrinho) {
      itemCarrinho.quantidade++;
  } else {
      carrinho.push({ ...produto, quantidade: 1, tamanho });
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
          ${item.nome} (Tamanho: ${item.tamanho}) - 
          ${item.quantidade} x R$ ${item.preco.toFixed(2)}
          <button onclick="removerDoCarrinho(${item.id}, '${item.tamanho}')">Remover</button>
      `;
      lista.appendChild(li);
  });
  document.getElementById("total").innerText = `Total: R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(produtoId, tamanho) {
  carrinho = carrinho.filter(item => !(item.id === produtoId && item.tamanho === tamanho));
  atualizarCarrinho();
}
