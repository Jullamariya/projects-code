
// export function getProductId(productId){
//   let matchingProduct;
//   product.forEach((product)=>{
//     if(product.id === productId){
//       matchingProduct = product;
//     }
//   });
//   return matchingProduct();
// }





let isClicked = false;

function showImage() {
  
  const container = document.querySelector('.js-category-image');
  container.innerHTML = ""; // clear previous items

  if (!isClicked) {
    // Array of products
    const products = [
      {
        image: "flipkartimage/mobileimages/mobile-product-01.webp",
        name: "POCO C71 (Cool Blue, 128GB)",
      },
      {
        image: "flipkartimage/mobileimages/mobile-product-01.webp",
        name: "Realme P4 Pro 5G",
      },
      {
        image: "flipkartimage/mobileimages/mobile-product-01.webp",
        name: "Motorola g45 5G",
      }
    ];

    // Display images + names
    products.forEach(product => {
      container.innerHTML += `
        <div class="product-card">
          <img src="${product.image}" alt="${product.name}" width="120">
          <p>${product.name}</p>
        </div>
      `;
    });

    isClicked = true; // next time else will run
  } else {
    alert('Please, click again');
    isClicked = false; // reset so it works again
  }
}



