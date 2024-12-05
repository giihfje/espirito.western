let carrinho = [];

function adicionarCarrinho(produto) {
    carrinho.push(produto);
    alert(`${produto} adicionado ao carrinho!`);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const carrinhoVazio = document.getElementById("carrinho-vazio");
    const itensCarrinho = document.getElementById("itens-carrinho");
    const finalizarCompra = document.getElementById("finalizar-compra");

    if (carrinho.length > 0) {
        carrinhoVazio.style.display = "none";
        itensCarrinho.innerHTML = carrinho.map(item => `<p>${item}</p>`).join('');
        finalizarCompra.style.display = "inline-block";
    } else {
        carrinhoVazio.style.display = "block";
        itensCarrinho.innerHTML = '';
        finalizarCompra.style.display = "none";
    }
}
