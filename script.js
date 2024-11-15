const products = [
  {
      id: 1,
      name: "Texana Masculina Couro",
      price: 350.00,
      size: [38, 39, 40, 41, 42, 43],
      image: "./imagem copy/image copy 2.png",
  },
  {
      id: 2,
      name: "Texana Feminina Estilo Western",
      price: 299.00,
      size: [34, 35, 36, 37, 38],
      image: "./imagem copy/Footwear.jpeg",
  },
  {
      id: 3,
      name: "Texana De Couro Premium",
      price: 450.00,
      size: [39, 40, 41, 42],
      image: "./imagem copy/zulyy.jpeg",
  }
];


// Carrinho de compras
let cart = [];

// Renderizar os produtos na tela
function renderProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Limpar a lista de produtos

  products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');

      productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>R$ ${product.price.toFixed(2)}</p>
          <select class="product-size">
              ${product.size.map(size => `<option value="${size}">${size}</option>`).join('')}
          </select>
          <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
      `;
      productList.appendChild(productElement);
  });
}

// Adicionar um produto ao carrinho
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const selectedSize = document.querySelector(`#product-list .product:nth-child(${productId}) .product-size`).value;
  
  const productInCart = cart.find(item => item.id === productId && item.size === selectedSize);

  if (productInCart) {
      productInCart.quantity++;
  } else {
      cart.push({ ...product, size: selectedSize, quantity: 1 });
  }

  updateCart();
}

// Atualizar o carrinho de compras
function updateCart() {
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  const cartItems = document.getElementById('cart-items');

  cartCount.textContent = cart.length;

  let total = 0;
  cartItems.innerHTML = '';

  cart.forEach(item => {
      total += item.price * item.quantity;

      const itemElement = document.createElement('li');
      itemElement.textContent = `${item.name} - Tamanho: ${item.size} x${item.quantity} - R$ ${(item.price * item.quantity).toFixed(2)}`;
      cartItems.appendChild(itemElement);
  });

  cartTotal.textContent = total.toFixed(2);
}

// Exibir o carrinho ao clicar no botão
document.getElementById('cartButton').addEventListener('click', () => {
  document.getElementById('cartModal').style.display = 'block';
});

// Fechar o carrinho
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('cartModal').style.display = 'none';
});

// Finalizar a compra
document.getElementById('checkoutButton').addEventListener('click', () => {
  alert('Compra finalizada!');
  cart = [];
  updateCart();
  document.getElementById('cartModal').style.display = 'none';
});

// Função de pesquisa
document.getElementById('searchInput').addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
});

// Inicializar o site com todos os produtos
renderProducts(products);
