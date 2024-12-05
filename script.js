document.addEventListener('DOMContentLoaded', () => {
  const carrinhoLista = document.querySelector('.carrinho-lista');
  const totalSpan = document.getElementById('total');
  let carrinho = [];
  let total = 0;

  document.querySelectorAll('.adicionar-carrinho').forEach(button => {
    button.addEventListener('click', () => {
      const produto = button.dataset.produto;
      const preco = parseFloat(button.dataset.preco);
      const tamanho = button.previousElementSibling.value;

      const item = { produto, tamanho, preco };
      carrinho.push(item);

      atualizarCarrinho();
    });
  });

  function atualizarCarrinho() {
    carrinhoLista.innerHTML = '';
    total = 0;

    carrinho.forEach((item, index) => {
      const itemHTML = `
        <p>${item.produto} (Tamanho: ${item.tamanho}) - R$${item.preco.toFixed(2)}
        <button onclick="removerItem(${index})">Remover</button></p>
      `;
      carrinhoLista.innerHTML += itemHTML;
      total += item.preco;
    });

    if (carrinho.length === 0) {
      carrinhoLista.innerHTML = '<p>Seu carrinho está vazio.</p>';
    }

    totalSpan.textContent = total.toFixed(2);
  }

  window.removerItem = (index) => {
    carrinho.splice(index, 1);
    atualizarCarrinho();
  };
});
