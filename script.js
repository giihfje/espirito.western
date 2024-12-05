let cart = [];

function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <p>${item.name}</p>
            <p>R$ ${item.price}</p>
        `;
        cartContainer.appendChild(itemElement);
    });
}

function toggleCart() {
    const cartElement = document.getElementById('cart');
    cartElement.classList.toggle('show');
}

function checkout() {
    if (cart.length === 0) {
        alert('Seu carrinho está vazio!');
    } else {
        alert('Finalizando a compra...');
        // Aqui você pode integrar com um sistema de pagamento real
    }
}

// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Simulação de produtos
const products = [
    { id: 1, name: 'Bota Texana Cowboy', price: 299.99 },
    { id: 2, name: 'Bota Texana Clássica', price: 350.00 }
];

// Rota para retornar os produtos
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Simulação de pagamento (fake)
app.post('/api/checkout', (req, res) => {
    console.log('Pedido recebido:', req.body);
    res.send({ success: true });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});