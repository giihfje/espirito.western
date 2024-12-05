// Elementos do carrinho
const carrinho = [];
const listaCarrinho = document.querySelector('.lista-carrinho');
const totalCarrinho = document.querySelector('.total');

// Atualizar o carrinho
function atualizarCarrinho() {
    listaCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - Tamanho: ${item.tamanho} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
        total += item.preco;
    });

    totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Adicionar ao carrinho
document.querySelectorAll('.adicionar-carrinho').forEach(button => {
    button.addEventListener('click', (e) => {
        const produto = e.target.closest('.produto');
        const nome = produto.querySelector('h3').textContent;
        const preco = parseFloat(produto.querySelector('.preco').textContent.replace('R$', '').replace(',', '.'));
        const tamanho = produto.querySelector('.tamanho').value;

        carrinho.push({ nome, preco, tamanho });
        atualizarCarrinho();
        alert(`${nome} foi adicionado ao carrinho!`);
    });
});
