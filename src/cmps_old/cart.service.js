// cart.service.js

var cartItems = [];

const getCartItems = () => cartItems;

const addToCart = item => {
  const itemInCart = cartItems.find(cartItem => item.id === cartItem.item.id);
  if( itemInCart ) {
    itemInCart.quantity++;
  } else {
    cartItems.push({item, quantity:1});
  }
}

// const addToCart = item => {
//   const itemInCart = cartItems.find(currentItem => item.id === currentItem.id);
//   if( itemInCart ) {
//     itemInCart.quantity++;
//   } else {
//     cartItems.push(item);
//     item.quantity = 1;
//   }
// }



const subtractFromCart = itemId => {
  const cartItemIndex = cartItems.findIndex(cartItem => cartItem.item.id === itemId);
  if( cartItemIndex > -1 ) {
    if( cartItems[cartItemIndex].quantity > 1 ) {
      cartItems[cartItemIndex].quantity--;
    } else {
      cartItems.splice(cartItemIndex, 1);
    }
  }
}

const clearItem = itemId => {
  const cartItemIndex = cartItems.findIndex(cartItem => cartItem.item.id === itemId);
  if( cartItemIndex > -1 ) {
    cartItems.splice(cartItemIndex, 1);
  }
}

const getCartTotal = () => {
  return cartItems.reduce(( acc, item ) => {
    return acc + (item.quantity * item.item.price);
  }, 0);
}

var cartService = {
  subtractFromCart,
  getCartItems,
  clearItem,
  addToCart,
  getCartTotal
}