
// export function getProductId(productId){
//   let matchingProduct;
//   product.forEach((product)=>{
//     if(product.id === productId){
//       matchingProduct = product;
//     }
//   });
//   return matchingProduct();
// }






    const product=[
    {
      id:"mobile1a2b3c4d-poductab-01a",
      image:"flipkartimage/mobileimages/mobile-product-01.webp",
      name:"POCO C71(Cool Blue,128GB)",
      rating:{
        stars:4.2,
        count:12108,
      },
      discount:"30%",
      priceCents:699900
    },
    {
      id:"mobile1a2b3c4d-productab-02a",
      image:"flipkartimage/mobileimages/realmemobile-product02.jpeg",
      name:"realme P4 Pro 5G(Birch wood,128GB)",
      rating:{
        stars:4.3,
        count:204167,
      },
      discount:"20%",
      priceCents:1199900
    },
    {
      id:"mobile1a2b3c4d-productad-03a",
      image:"flipkartimage/mobileimages/mobile-product-01.webp",
      name:"Motorola g45 5G(Pantone Dahlia Purple,128GB)",
      rating:{
      stars:4.3,
      count:430,
    },
      discount:"11%",
      priceCents:1849900
    }
    ]

    let productHTML ="";

    product.forEach((product)=>{
        productHTML = 
          productsHTML + `
          
          <div class="section-five">
              <div class="mobile-product-division">
                <img
                  class="mobile-product-image"
                  src="${product.image}"
                />
              </div>

            <div class="left-section-product">
              <div class="mobile-heading">
                <span class="heading-span">${product.name}</span>
              </div>

              <div class="count">
                <span class="span-count">${product.name}</span>
                    <img class="assured-image" src="flipkartimage/assuredlogo.png" />
              </div>

              <div class="green-arrow-division">
                  <img
                    class="green-arrow-image"
                    src="flipkartimage/greenarrowdown.svg"
                  />
                   <span class="percent-span">${product.discount}</span>

                  <div class="amount-division">
                    <span class="amount-span">$9,999</span>
                    <span class="amounttwo-span">$${(product.priceCents)/100}</span>
                  </div>
              </div>  

              <div class="product-division-four">

                <div class="image-division">
                  <img class="image-wow-logo" src="flipkartimage/wow-image.png" />
                </div>

                <div class="offer-division">
                  <span class="bank-offer-text">$6,649 with Bank offer</span>
                </div>
              </div>

                <div class="exchange-division">
                  <span class="upto-span">
                    Upto 
                  </span>
                    <span class="upto-price-span">
                      $5,200 
                    </span>
                  <span class="exchange-span">
                     Off on Exchange
                  </span>
                </div>
                
                <div class="warranty-division">
                  <span class="warranty-span">1 year warranty by POCO </span>
                </div>
            </div>
             <div class="wishlist-division">
              <img class="wishlist-image"
                src="flipkartimage/whishlistheart.svg"
              />
           </div>
          </div>

          
        </div>

         <div class="variant-division">
          <span class="variant-span">View All Variants</span>
        </div>
          `;
    });

document.querySelector(".js-container-two").innerHTML = productHTML;