var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {

  var rand = Math.random() * 100;
  var price = Math.floor(rand);

  var product = {[item]:price};
  cart.push(product);

  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  var liste = [];
  var final = [];

  if (cart.length === 0) {
    console.log("Your shopping cart is empty.");
  }

  else if (cart.length === 1) {
    for (var elem in cart) {
      for (var key in cart[elem]) {
        console.log(`In your cart, you have ${key} at $${cart[elem][key]}.`);
        }
      }
    }

  else if (cart.length === 2){
    for (var elem in cart) {
      for (var key in cart[elem]) {
        liste.push(`${key} at $${cart[elem][key]}`)
      }
    }
    console.log(`In your cart, you have ${liste[0]} and ${liste[1]}.`);
  }

  else {
    for (var elem in cart) {
      for (var key in cart[elem]) {
        liste.push(`${key} at $${cart[elem][key]}`)
      }
    }
    for (var i = 0; i < liste.length; i++) {
      if (i == 0) {
        final.push(`In your cart, you have ${liste[i]}`);
      }
      else if (i > 0 && i < liste.length-1){
        final.push(`, ${liste[i]}`);
      }
      else if (i == liste.length-1) {
        final.push(` and ${liste[i]}.`);
      }
    }
    console.log(final);
  }

}

function total() {
  var total;
  for (var elem in cart) {
    for (var key in cart[elem]) {
      total += cart[elem][key];
    }
  }
  console.log(total);
}

function removeFromCart(item) {
  delete cart.item;
  console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
}
