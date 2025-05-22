// products.js

// Function to add items to the cart
function addToCart(product, price, quantity, image) {
  if (quantity == 0) {
    return;
  }
  
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const item = {
    product: product,
    price: price,
    quantity: parseInt(quantity),
    image: image
  };

  // Check if the product already exists in the cart
  const existingItemIndex = cart.findIndex((item) => item.product === product);

  if (existingItemIndex > -1) {
    // Update quantity if the product is already in the cart
    cart[existingItemIndex].quantity += item.quantity;
  } else {
    // Otherwise, add the new item
    cart.push(item);
  }

  const itemQuantity = cart[cart.findIndex((item) => item.product === product)].quantity;

  localStorage.setItem("cart", JSON.stringify(cart));

  Swal.fire({
    title: "Added to Cart",
    html: `${product} has been added to your cart!<br>You now have ${itemQuantity} in your cart.`,
    icon: "success",
    cancelButtonText: "View Cart",
    showCancelButton: true,
    cancelButtonColor: "#555",
    reverseButtons: true
  }).then((result) => {
    if (!result.isConfirmed) {
      document.location = 'cart.html';
    }
  });
}
