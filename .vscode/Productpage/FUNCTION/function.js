

// let isClicked = false;

// function showImage(container){
//   const pageDiv= document.querySelector(".js-text-list-mobile-division");
// // const displayDiv =document.querySelector(".js-page-display");

//   window.location.href ="http://127.0.0.1:5503/.vscode/Productpage/checkoutpage/checkout.html";


// }

productsfunction();

function gotoCheckout() {
  window.location.href="function.html";
  document.querySelectorAll(".js-text-list-mobile-division").forEach(el => {
    el.addEventListener("click", () => {
      window.location.href = "http://127.0.0.1:5503/.vscode/Productpage/checkoutpage/checkout.html";
    });
  });
}
document.addEventListener("click", attachClickHandlers);

