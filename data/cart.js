export const cart = [];

export function addToCart(productId){
let matchingItem;
    let amount = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    let added = document.querySelector(`.js-added-to-cart-${productId}`);
    added.classList.add("changing");
    setTimeout(() => {
      if(added.classList.contains("changing")){
        added.classList.remove("changing");
      }
    },2000);
    
    cart.forEach((cartItem) => {
        if(productId === cartItem.productId){
          matchingItem = cartItem;
        }
    });

    if (matchingItem){
       matchingItem.quantity +=amount;
    }else{
        cart.push({
            productId,
            quantity:amount
        });
    }
}