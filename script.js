// Produtos simulados
const products = [
  { id: 1, name: "Texana Marrom", price: 250 },
  { id: 2, name: "Texana Preta", price: 270 },
  // Adicione mais produtos conforme necessário
];

let cart = [];

// Função para adicionar ao carrinho
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cartItem = cart.find(item => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  
  updateCart();
}

// Função para atualizar o carrinho
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const li = document.createElement("li");
    li.innerHTML = `${item.name} - R$${item.price} x ${item.quantity}`;
    cartItems.appendChild(li);
  });

  document.getElementById("total-price").innerText = `Total: R$${total}`;
  document.getElementById("cart-count").innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.getElementById("cart").classList.remove("hidden");
}

// Função para realizar a busca
function searchItems() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach(product => {
    const name = product.dataset.name.toLowerCase();
    product.style.display = name.includes(searchValue) ? "block" : "none";
  });
}

// Função de checkout
function checkout() {
  alert("Compra finalizada com sucesso!");
  cart = [];
  updateCart();
  document.getElementById("cart").classList.add("hidden");
}
