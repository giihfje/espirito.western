let totalCarrinho = 0;
const listaCarrinho = document.getElementById('lista-carrinho');
const totalElement = document.getElementById('total');

function adicionarAoCarrinho(nomeProduto, preco) {
    totalCarrinho += preco;
    
    const itemCarrinho = document.createElement('li');
    itemCarrinho.textContent = `${nomeProduto} - R$ ${preco.toFixed(2)}`;
    listaCarrinho.appendChild(itemCarrinho);

    totalElement.textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`;
}