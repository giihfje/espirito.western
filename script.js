const produtos = [
    { id: 1, nome: 'Texana 1', preco: 250, img: './imagem/image.png' },
    { id: 2, nome: 'Texana 2', preco: 270, img: './imagem/texana_feminina.jp' },
    { id: 3, nome: 'Texana 3', preco: 350, img: './imagem/image copy.png' }
];

let totalCarrinho = 0;
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

document.addEventListener('DOMContentLoaded', () => {
    renderizarProdutos();
    atualizarCarrinho();
    document.getElementById('filtro').addEventListener('input', filtrarProdutos);
    document.getElementById('finalizar-compra').addEventListener('click', finalizarCompra);
});

function renderizarProdutos() {
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';

    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.className = 'produto';
        produtoDiv.innerHTML = `
            <img src="${produto.img}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar ao Carrinho</button>
        `;
        listaProdutos.appendChild(produtoDiv);
    });
}
function adicionarAoCarrinho(id) {
    const produto = produtos.find(prod => prod.id === id);
    carrinho.push(produto);
    totalCarrinho += produto.preco;

    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';
    carrinho.forEach(produto => {
        const itemCarrinho = document.createElement('li');
        itemCarrinho.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        listaCarrinho.appendChild(itemCarrinho);
    });
    document.getElementById('total').textContent = `Total: R$ ${totalCarrinho.toFixed(2)}`;
    document.getElementById('contador-carrinho').textContent = carrinho.length;
}

function finalizarCompra() {
    alert('Compra finalizada! Obrigado pela sua compra!');
    carrinho = [];
    totalCarrinho = 0;
    localStorage.removeItem('carrinho');
    atualizarCarrinho();
}