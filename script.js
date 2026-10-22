let cart = [];

function addCart(productName) {
  cart.push(productName);

  alert(
    productName +
    " added to cart!\nTotal items: " +
    cart.length
  );
}