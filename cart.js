// cart.js

// Function to update the cart and display items
function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartContainer = document.getElementById("cart-items");
  cartContainer.innerHTML = ""; // Clear previous cart items

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  // Loop through cart items and add to the container
  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.product}">
        <div class="cart-item-details">
          <h4 class="product-name">${item.product}</h4>
          <p class="product-price">$${item.price} per item</p>
          <div class="cart-controls">
            <label>Quantity:</label>
            <input class="cart-input" type="number" value="${item.quantity}" min="1" max="10" onchange="updateQuantity('${item.product}', this.value)">
            <button onclick="removeItem('${item.product}')" class="btn-small">Remove</button>
          </div>
        </div>
      `;

    cartContainer.appendChild(cartItem);
  });

  updateTotal(); // Update the total price when the cart items are displayed
}

// Function to update quantity of an item in the cart
function updateQuantity(product, quantity) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const itemIndex = cart.findIndex((item) => item.product === product);
  if (itemIndex > -1) {
    cart[itemIndex].quantity = parseInt(quantity);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  updateTotal();
}

// Function to remove an item from the cart
function removeItem(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter((item) => item.product !== product); // Filter out the item to remove
  localStorage.setItem("cart", JSON.stringify(cart));
  updateTotal();
  displayCart(); // Re-render the cart after removing an item
}

// Function to update the total price of the cart
function updateTotal() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  document.getElementById("total-price").textContent = `Total: $${total.toFixed(
    2
  )}`;
}

document.addEventListener("DOMContentLoaded", function () {
  displayCart();
});
