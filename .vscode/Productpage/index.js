
























const products = [
  {
    id: "1",
    image: "flipkartimage/mobileimages/mobile-product-01.webp",
    name: "POCO C71 (Cool Blue,128GB)",
    rating: { stars: 4.2, count: 12108 },
    discount: "30%",
    pricecross: "9,999",
    priceCents: 699900,
  },
  {
    id: "2",
    image: "flipkartimage/mobileimages/realmemobile-product02.jpeg",
    name: "realme P4 Pro 5G (Birch wood,128GB)",
    rating: { stars: 4.3, count: 204167 },
    discount: "20%",
    pricecross: "19,999",
    priceCents: 1199900,
  },
  {
    id: "3",
    image: "flipkartimage/mobileimages/mobile-product-01.webp",
    name: "Motorola g45 5G (Pantone Dahlia Purple,128GB)",
    rating: { stars: 4.3, count: 430 },
    discount: "11%",
    pricecross: "15,999",
    priceCents: 1849900,
  },
];

const container = document.getElementById("section");

products.forEach((product) => {
  const div = document.createElement("div");
  div.classList.add("section");

  div.innerHTML = `
    <div class="mobile-product-division">
      <img class="mobile-product-image" src="${product.image}" />
    </div>

    <div class="left-section-product">
      <div class="mobile-heading">
        <span class="heading-span">${product.name}</span>
      </div>

      <div class="count">
        <span class="span-count">(${product.rating.count})</span>
        <img class="assured-image" src="flipkartimage/assuredlogo.png" />
      </div>

      <div class="green-arrow-division">
        <img class="green-arrow-image" src="flipkartimage/greenarrowdown.svg" />
        <span class="percent-span">${product.discount}</span>
        <div class="amount-division">
          <span class="amount-span">₹${product.pricecross}</span>
          <span class="amounttwo-span">₹${(product.priceCents / 100).toLocaleString()}</span>
        </div>
      </div>  

      <div class="warranty-division">
        <span class="warranty-span">1 year warranty by ${product.name.split(" ")[0]}</span>
      </div>  
    </div>

    <div class="wishlist-division">
      <img class="wishlist-image js-wishlist-image" src="flipkartimage/whishlistheart.svg" />
    </div>
  `;

  container.appendChild(div);
});























  //   const product=[
  //   {
  //     id:"1",
  //     image:"flipkartimage/mobileimages/mobile-product-01.webp",
  //     name:"POCO C71(Cool Blue,128GB)",
  //     rating:{
  //       stars:4.2,
  //       count:12108,
  //     },
  //     discount:"30%",
  //     pricecross:'9,999',
  //     priceCents:699900
  //   },
  //   {
  //     id:"2",
  //     image:"flipkartimage/mobileimages/realmemobile-product02.jpeg",
  //     name:"realme P4 Pro 5G(Birch wood,128GB)",
  //     rating:{
  //       stars:4.3,
  //       count:204167,
  //     },
  //     discount:"20%",
  //     pricecross:'19,999',
  //     priceCents:1199900
  //   },
  //   {
  //     id:"3",
  //     image:"flipkartimage/mobileimages/mobile-product-01.webp",
  //     name:"Motorola g45 5G(Pantone Dahlia Purple,128GB)",
  //     rating:{
  //     stars:4.3,
  //     count:430,
  //   },
  //     discount:"11%",
  //     pricecross:'15,999',
  //     priceCents:1849900
  //   }
  //   ]



  // let productHTML = "";
   
  // const container= document.getElementById('section-five');

  // product.forEach((product) => {
  //   const containertwo = document.createElement('div')
  //   containertwo.innerHTML =
  //     `    
  //                <div class="section-five">

  //              <div class="mobile-product-division">
  //               <img
  //                 class="mobile-product-image"
  //                 src="flipkartimage/mobileimages/mobileimage.jpeg"
  //               />
  //             </div>

  //           <div class="left-section-product">
  //             <div class="mobile-heading">
  //               <span class="heading-span">${product.name}</span>
  //             </div>

  //             <div class="count">
  //               <span class="span-count">(183)</span>
  //                   <img class="assured-image" src="flipkartimage/assuredlogo.png" />
  //             </div>

  //             <div class="green-arrow-division">
  //                 <img
  //                   class="green-arrow-image"
  //                   src="flipkartimage/greenarrowdown.svg"
  //                 />
  //                  <span class="percent-span">30%</span>

  //                 <div class="amount-division">
  //                   <span class="amount-span">$9,999</span>
  //                   <span class="amounttwo-span">$6,999</span>
  //                 </div>
  //             </div>  

  //             <div class="product-division-four">

  //               <div class="image-division">
  //                 <img class="image-wow-logo" src="flipkartimage/wow-image.png" />
  //               </div>

  //               <div class="offer-division">
  //                 <span class="bank-offer-text">$6,649 with Bank offer</span>
  //               </div>
  //             </div>

  //               <div class="exchange-division">
  //                 <span class="upto-span">
  //                   Upto 
  //                 </span>
  //                   <span class="upto-price-span">
  //                     $5,200 
  //                   </span>
  //                 <span class="exchange-span">
  //                    Off on Exchange
  //                 </span>
  //               </div>
                

  //               <div class="warranty-division">
  //                 <span class="warranty-span">1 year warranty by POCO </span>
  //               </div>  

  //            </div>
  //            <div class="wishlist-division ">
  //             <img class="wishlist-image js-wishlist-image"
  //               src="flipkartimage/whishlistheart.svg"
  //             />
  //          </div>
           

  //     </div> 



  //       <div class="variant-division">
  //         <span class="variant-span">View All Variants</span>
  //        </div>  


  //        <div class="container-two"> 
 
  //         <div class="section-five">

  //             <div class="mobile-product-division">
  //               <img
  //                 class="mobile-product-image"
  //                 src="flipkartimage/mobileimages/realmemobile-product02.jpeg"
  //               />
  //             </div>

  //           <div class="left-section-product">
  //             <div class="sponsered">Sponsered</div>
  //             <div class="mobile-heading">
  //               <span class="heading-span">realme P4 5G(Steal Grey,256 GB)</span>
  //             </div>

  //             <div class="count">
  //               <span class="span-count">(183)</span>
  //                   <img class="assured-image" src="flipkartimage/assuredlogo.png" />
  //             </div>

  //             <div class="green-arrow-division">
  //                 <img
  //                   class="green-arrow-image"
  //                   src="flipkartimage/greenarrowdown.svg"
  //                 />
  //                  <span class="percent-span">30%</span>

  //                 <div class="amount-division">
  //                   <span class="amount-span">$9,999</span>
  //                   <span class="amounttwo-span">$6,999</span>
  //                 </div>
  //             </div>  

  //             <div class="product-division-four">

  //               <div class="image-division">
  //                 <img class="image-wow-logo" src="flipkartimage/wow-image.png" />
  //               </div>

  //               <div class="offer-division">
  //                 <span class="bank-offer-text">$6,649 with Bank offer</span>
  //               </div>
  //             </div>

  //               <div class="exchange-division">
  //                 <span class="upto-span">
  //                   Upto 
  //                 </span>
  //                   <span class="upto-price-span">
  //                     $5,200 
  //                   </span>
  //                 <span class="exchange-span">
  //                    Off on Exchange
  //                 </span>
  //               </div>
                
  //               <div class="warranty-division">
  //                 <span class="warranty-span">1 year warranty by POCO </span>
  //               </div>
  //           </div>
  //           <div class="wishlist-division">
  //             <img class="wishlist-image"
  //                 src="flipkartimage/whishlistheart.svg"
  //               />
  //           </div>
  //         </div>   


  //     </div>  

  //       <div class="next-page-section">
  //         <div class="sixram-mobile-division text-ram-width">
  //           <div class="text-list-mobile">
  //             <div class="text-list-mobile-division js-text-list-mobile-division " 
  //                onclick="showImage()">
  //                6 GB RAM | 128 GB Storage
  //             </div>
  //           </div>
  //         </div>
  //           <div class="js-category-image"></div>
  //         <div class="list-mobile">
  //           <div class="sixram-mobile-division">
  //             <div class="text-list-mobile">
  //               <div class="text-list-mobile-division">
  //                 16.94 cm (6.67 Inch) Full HD+ Display
  //               </div>
  //             </div>
  //           </div>

  //           <div class="sixram-mobile-division">
  //             <div class="text-list-mobile">
  //                 <div class="text-list-mobile-division">
  //                     5110 mAh
  //                 </div>
  //             </div>
  //           </div>
  //         </div>
         
  //         <div class="list-mobile">
  //           <div class="sixram-mobile-division">
  //             <div class="text-list-mobile">
  //                <div class="text-list-mobile-division">
  //                     50MP + 8MP + 2MP
  //                 </div>
  //             </div>
  //           </div>

  //           <div class="sixram-mobile-division">
  //             <div class="text-list-mobile">
  //               <div class="text-list-mobile-division">
  //                     20MP Front Camera
  //                 </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>

  //        <div class="variant-division">
  //         <span class="variant-span">View All Variants</span>
  //       </div>  
  //     `;
  //       container.appendChild(containertwo)

  // });


// document.querySelector('.js-display-image').innerHTML = productHTML;

// ***************************************************

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
