const products = [
  { 
      id: 1, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
  { 
      id: 2, 
      name: "Texana Country", 
      image: "https://via.placeholder.com/300x300?text=Texana+2", 
      price: 420, 
      sizes: [37, 38, 40, 42, 43]
  },
  { 
      id: 3, 
      name: "Texana Premium", 
      image: "https://via.placeholder.com/300x300?text=Texana+3", 
      price: 500, 
      sizes: [39, 40, 41, 42, 44]
  },
  { 
      id: 4, 
      name: "Texana Casual", 
      image: "https://via.placeholder.com/300x300?text=Texana+4", 
      price: 310, 
      sizes: [36, 37, 38, 40]
  },
  { 
      id: 5, 
      name: "Texana Luxo", 
      image: "https://via.placeholder.com/300x300?text=Texana+5", 
      price: 620, 
      sizes: [40, 41, 42, 43]
  },
  { 
      id: 6, 
      name: "Texana Customizada", 
      image: "https://via.placeholder.com/300x300?text=Texana+6", 
      price: 800, 
      sizes: [38, 39, 40, 41, 44]
  },
{ 
      id: 7, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 8, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 9, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 10, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 11, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 12, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 13,
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 14, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 16, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 17, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 18, 
      name: "Texana Tradicional", 
      image: "https://via.placeholder.com/300x300?text=Texana+1", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 19, 
      name: "Texana Tradicional", 
      image: "./imagem copy/image copy.png", 
      price: 350, 
      sizes: [38, 39, 40, 41, 42]
  },
{ 
      id: 20, 
      name: "Texana Infantil", 
      image: "./imagem copy/Footwear.jpeg", 
      price: 90,
      sizes: [10, 12, 16 , 22, 24]
  },
];

let cart = [];

function loadProducts() {
  const productList = document.getElementById('productList');
  productList.innerHTML = '';
  products.forEach(product => {
      const productCard = document.createElement('div');
      productCard.className = 'product-card';
      productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Preço: R$ ${product.price.toFixed(2)}</p>
          <label for="sizeSelect${product.id}">Selecione o tamanho:</label>
          <select id="sizeSelect${product.id}">
              ${product.sizes.map(size => <option value="${size}">${size}</option>).join('')}
          </select>
          <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
      `;
      productList.appendChild(productCard);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const selectedSize = document.getElementById(sizeSelect${productId}).value;
  if (!selectedSize) {
      alert('Por favor, selecione um tamanho.');
      return;
  }
}

  function viewCart() {
  if (cart.length === 0) {
      alert('Seu carrinho está vazio.');
}
}

function searchProduct() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(query));
  const productList = document.getElementById('productList');
  productList.innerHTML = '';
  if (filteredProducts.length > 0) {
      filteredProducts.forEach(product => {
          const productCard = document.createElement('div');
          productCard.className = 'product-card';
          productCard.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>Preço: R$ ${product.price.toFixed(2)}</p>
              <label for="sizeSelect${product.id}">Selecione o tamanho:</label>
              <select id="sizeSelect${product.id}">
                  ${product.sizes.map(size => <option value="${size}">${size}</option>).join('')}
              </select>
              <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
          `;
          productList.appendChild(productCard);
      });
  } else {
      productList.innerHTML = '<p>Nenhum produto encontrado.</p>';
  }
}

window.onload = loadProducts;