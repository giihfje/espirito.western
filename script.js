function adicionarAoCarrinho(produto) {
  let tamanho = '';

  if (produto === 'Bota de Cowboy') {
      // Obtém o tamanho selecionado
      const selectElement = document.getElementById('tamanho-bota');
      tamanho = selectElement.value;

      if (!tamanho) {
          alert('Por favor, selecione um tamanho antes de adicionar ao carrinho.');
          return;
      }
  }

  // Exibe uma mensagem com o produto adicionado (e tamanho, se aplicável)
  const mensagem = tamanho ? `${produto} (Tamanho ${tamanho}) foi adicionado ao carrinho!` : `${produto} foi adicionado ao carrinho!`;
  alert(mensagem);
}
