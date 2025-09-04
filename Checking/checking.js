

// let isClicked = false;

// function showImage() {
//   const container = document.querySelector('.js-category-image');
//   container.innerHTML = ""; // clear previous items

//   if (!isClicked) {
//     // Array of products
//     const products = [
//       {
//         image: "flipkartimage/mobileimages/mobile-product-01.webp",
//         name: "POCO C71 (Cool Blue, 128GB)",
//       },
//       {
//         image: "flipkartimage/mobileimages/mobile-product-01.webp",
//         name: "Realme P4 Pro 5G",
//       },
//       {
//         image: "flipkartimage/mobileimages/mobile-product-01.webp",
//         name: "Motorola g45 5G",
//       }
//     ];

//     // Display images + names
//     products.forEach(product => {
//       container.innerHTML += `
//         <div class="product-card">
//           <img src="${product.image}" alt="${product.name}" width="120">
//           <p>${product.name}</p>
//         </div>
//       `;
//     });

//     isClicked = true; // next time else will run
//   } else {
//     alert('Please, click again');
//     isClicked = false; // reset so it works again
//   }
// }



// document.querySelectorAll('.js-text-list-mobile-division').forEach(button => {
//   button.addEventListener('click', () => {
//     const container = button.closest('.next-page-section').querySelector('.js-category-image');
//     container.innerHTML = "";

//     const products = [
//       { image: "flipkartimage/mobileimages/mobile-product-01.webp", name: "POCO C71 (Cool Blue, 128GB)" },
//       { image: "flipkartimage/mobileimages/mobile-product-01.webp", name: "Realme P4 Pro 5G" },
//       { image: "flipkartimage/mobileimages/mobile-product-01.webp", name: "Motorola g45 5G" }
//     ];

//     products.forEach(product => {
//       container.innerHTML += `
//         <div class="product-card">
//           <img src="${product.image}" alt="${product.name}" width="120">
//           <p>${product.name}</p>
//         </div>
//       `;
//     });
//   });
// });




// let isClicked = false;

// function showImage(button) {
//   // find the related container near the clicked button
//   const container = button.closest('.next-page-section').querySelector('.js-category-image');
//   container.innerHTML = "";

//   if (!isClicked) {
//     const products = [
//       { image: "flipkartimage/mobileimages/mobile-product-01.webp", name: "POCO C71 (Cool Blue, 128GB)" },
//       { image: "flipkartimage/mobileimages/mobile-product-01.webp", name: "Realme P4 Pro 5G" },
//       { image: "flipkartimage/mobileimages/mobile-product-01.webp", name: "Motorola g45 5G" }
//     ];

//     products.forEach(product => {
//       container.innerHTML += `
//         <div class="product-card">
//           <img src="${product.image}" alt="${product.name}" width="120">
//           <p>${product.name}</p>
//         </div>
//       `;
//     });

//     isClicked = true;
//   } else {
//     alert("Please, click again");
//     isClicked = false;
//   }
// }

//    const product=[
//     {
//       id:"mobile1a2b3c4d-poductab-01a",
//       image:"flipkartimage/mobileimages/mobile-product-01.webp",
//       name:"POCO C71(Cool Blue,128GB)",
//       rating:{
//         stars:4.2,
//         count:12108,
//       },
//       discount:"30%",
//       pricecross:'9,999',
//       priceCents:699900
//     },
//     {
//       id:"mobile1a2b3c4d-productab-02a",
//       image:"flipkartimage/mobileimages/realmemobile-product02.jpeg",
//       name:"realme P4 Pro 5G(Birch wood,128GB)",
//       rating:{
//         stars:4.3,
//         count:204167,
//       },
//       discount:"20%",
//       pricecross:'19,999',
//       priceCents:1199900
//     },
//     {
//       id:"mobile1a2b3c4d-productad-03a",
//       image:"flipkartimage/mobileimages/mobile-product-01.webp",
//       name:"Motorola g45 5G(Pantone Dahlia Purple,128GB)",
//       rating:{
//       stars:4.3,
//       count:430,
//     },
//       discount:"11%",
//       pricecross:'15,999',
//       priceCents:1849900
//     }
//     ]

//     let productHTML ="";

//     product.forEach((product)=>{
//         productHTML = 
//           productHTML + `

//           <div class="section-five">

//               <div class="mobile-product-division">
//                 <img
//                   class="mobile-product-image"
//                   src="${product.image}"
//                 />
//               </div>

//             <div class="left-section-product">
//               <div class="sponsered">Sponsered</div>
//               <div class="mobile-heading">
//                 <span class="heading-span">${product.name}</span>
//               </div>

//               <div class="count">
//                 <span class="span-count">${product.count}</span>
//                     <img class="assured-image" src="flipkartimage/assuredlogo.png" />
//               </div>

//               <div class="green-arrow-division">
//                   <img
//                     class="green-arrow-image"
//                     src="flipkartimage/greenarrowdown.svg"
//                   />
//                    <span class="percent-span">${product.discount}</span>

//                   <div class="amount-division">
//                     <span class="amount-span">$${product.pricecross}</span>
//                     <span class="amounttwo-span">$${(product.priceCents)/100}</span>
//                   </div>
//               </div>  

//               <div class="product-division-four">

//                 <div class="image-division">
//                   <img class="image-wow-logo" src="flipkartimage/wow-image.png" />
//                 </div>

//                 <div class="offer-division">
//                   <span class="bank-offer-text">$6,649 with Bank offer</span>
//                 </div>
//               </div>

//                 <div class="exchange-division">
//                   <span class="upto-span">
//                     Upto 
//                   </span>
//                     <span class="upto-price-span">
//                       $5,200 
//                     </span>
//                   <span class="exchange-span">
//                      Off on Exchange
//                   </span>
//                 </div>
                
//                 <div class="warranty-division">
//                   <span class="warranty-span">1 year warranty by POCO </span>
//                 </div>
//             </div>
//             <div class="wishlist-division">
//               <img class="wishlist-image"
//                   src="flipkartimage/whishlistheart.svg"
//                 />
//             </div>
//           </div>    

//            <div class="variant-division">
//           <span class="variant-span">View All Variants</span>
//          </div>  
     
//         <div class="next-page-section">
//           <div class="sixram-mobile-division text-ram-width">
//             <div class="text-list-mobile">
//               <div class="text-list-mobile-division js-text-list-mobile-division " 
//               onclick="showImage()">
//                  6 GB RAM | 128 GB Storage
//               </div>
//             </div>
//           </div>
//             <div class="js-category-image"></div>
//           <div class="list-mobile">
//             <div class="sixram-mobile-division">
//               <div class="text-list-mobile">
//                 <div class="text-list-mobile-division">
//                   16.94 cm (6.67 Inch) Full HD+ Display
//                 </div>
//               </div>
//             </div>

//             <div class="sixram-mobile-division">
//               <div class="text-list-mobile">
//                   <div class="text-list-mobile-division">
//                       5110 mAh
//                   </div>
//               </div>
//             </div>
//           </div>
         
//           <div class="list-mobile">
//             <div class="sixram-mobile-division">
//               <div class="text-list-mobile">
//                  <div class="text-list-mobile-division">
//                       50MP + 8MP + 2MP
//                   </div>
//               </div>
//             </div>

//             <div class="sixram-mobile-division">
//               <div class="text-list-mobile">
//                 <div class="text-list-mobile-division">
//                       20MP Front Camera
//                   </div>
//               </div>
//             </div>
//           </div>
//         </div>

//          <div class="variant-division">
//           <span class="variant-span">View All Variants</span>
//         </div>   
//           `;
//     });

// document.querySelector(".js-image-display").innerHTML = productHTML;

// ****************************************************

//   const parentContainer = document.querySelectorAll('.read-more-container');

// parentContainer.forEach(container => {
//   container.addEventListener('click', event => {
//     const current = event.target;

//     // check if clicked element is the button
//     const isReadMoreBtn = current.classList.contains('read-more-button');
//     if (!isReadMoreBtn) return;

//     const currentText = current.parentNode.querySelector('.read-more-text');

//     // toggle hidden text
//     currentText.classList.toggle('read-more-text--show');

//     // change button text
//     current.textContent = current.textContent.includes('Read More')
//       ? "Read Less..."
//       : "Read More...";
//   });
// });

// const parentContainer = document.querySelector




//*************************************** */

function productsfunction(){
  fetch("./checking.json")
  .then(response => response.json())
  .then(data =>{
    const productContainer = document.getElementById("section-five");
    data.products.forEach(item =>{
      const div = document.createElement("div")
      div.classList.add("section");
      div.innerHTML =`
        <div class="mobile-product-division">
        <img class="mobile-product-image" src="flipkartimage/mobileimages/mobile-product-01.webp" />
      </div>

      <div class="left-section-product">
        <div class="mobile-heading">
          <span class="heading-span">${item.name}</span>
        </div>

        <div class="count">
          <span class="span-count">(${item.rating.count})</span>
          <img class="assured-image" src="flipkartimage/assuredlogo.png" />
        </div>

        <div class="green-arrow-division">
          <img class="green-arrow-image" src="flipkartimage/greenarrowdown.svg" />
          <span class="percent-span">${item.discount}</span>
          <div class="amount-division">
            <span class="amount-span">₹${item.pricecross}</span>
            <span class="amounttwo-span">₹${item.priceCents}</span>
          </div>
        </div>  

        <div class="warranty-division">
          <span class="warranty-span">1 year warranty by ${item.name.split(" ")[0]}</span>
        </div>  
    </div>`;
        productContainer.appendChild(div);
    });
  })
  .catch(error => console.error("Error loading JSON",error));
}
productsfunction();

