// Seletores e variáveis globais
const produtos = document.querySelectorAll('.produto');
const listaCarrinho = document.querySelector('.lista-carrinho');
const totalElement = document.querySelector('.total');
let carrinho = [];

// Função para aplicar promoções
function aplicarPromocoes() {
    let totalDesconto = 0;

    carrinho.forEach(item => {
        // Promoção: Texanas tamanho 40 têm 15% de desconto
        if (item.categoria === 'texanas' && item.tamanho === '40') {
            const desconto = item.preco * 0.15; // 15% de desconto
            totalDesconto += desconto;
            item.preco -= desconto; // Atualiza o preço no carrinho
        }
    });

    return totalDesconto;
}

// Função para atualizar o carrinho
function atualizarCarrinho() {
    listaCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - Tamanho: ${item.tamanho} - R$ ${item.preco.toFixed(2)}`;
        listaCarrinho.appendChild(li);
        total += item.preco;
    });

    const totalDesconto = aplicarPromocoes();
    totalElement.textContent = `Total: R$ ${(total - totalDesconto).toFixed(2)}`;

    if (totalDesconto > 0) {
        const descontoMsg = document.createElement('p');
        descontoMsg.textContent = `Você economizou: R$ ${totalDesconto.toFixed(2)} com promoções!`;
        listaCarrinho.appendChild(descontoMsg);
    }
}

// Adicionar produto ao carrinho
produtos.forEach(produto => {
    const btn = produto.querySelector('.adicionar-carrinho');
    btn.addEventListener('click', () => {
        const nome = produto.querySelector('h3').textContent;
        const precoOriginal = parseFloat(produto.querySelector('.preco').textContent.replace('R$', '').replace(',', '.'));
        const tamanho = produto.querySelector('.tamanho').value;
        const categoria = produto.dataset.categoria;

        // Adiciona o produto ao carrinho com categoria
        carrinho.push({ nome, preco: precoOriginal, tamanho, categoria });
        atualizarCarrinho();

        alert(`${nome} foi adicionado ao carrinho!`);
    });
});
