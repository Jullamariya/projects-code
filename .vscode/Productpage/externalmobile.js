
// deliveryOption.

export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
  [{
    productId:"",
    quantity:2,
    deliveryOptionId:'1'
  },
  {
    productId:"",
    quantity:1,
    deliveryOptionId:'2'
  }]
}