document.addEventListener('DOMContentLoaded', () => {
  const carrinho = [];
  const carrinhoLista = document.querySelector('.carrinho-lista');
  const totalSpan = document.getElementById('total');

  document.querySelectorAll('.adicionar-carrinho').forEach(botao => {
    botao.addEventListener('click', () => {
      const produto = botao.dataset.produto;
      const preco = parseFloat(botao.dataset.preco);
      const tamanho = botao.previousElementSibling.value;

      carrinho.push({ produto, preco, tamanho });
      atualizarCarrinho();
    });
  });

  function atualizarCarrinho() {
    carrinhoLista.innerHTML = '';
    let total = 0;

    carrinho.forEach((item, index) => {
      total += item.preco;
      const itemHTML = `
        <p>${item.produto} (Tamanho ${item.tamanho}) - R$${item.preco.toFixed(2)}
        <button onclick="removerItem(${index})">Remover</button></p>
      `;
      carrinhoLista.innerHTML += itemHTML;
    });

    if (carrinho.length === 0) {
      carrinhoLista.innerHTML = '<p>Seu carrinho está vazio.</p>';
    }

    totalSpan.textContent = total.toFixed(2);
  }

  window.removerItem = index => {
    carrinho.splice(index, 1);
    atualizarCarrinho();
  };
});
