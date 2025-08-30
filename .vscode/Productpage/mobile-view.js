let productHTML = "";

products.forEach((product) => {
   productHTML =
    productHTML +
    `
          <div class="section-five">

              <div class="mobile-product-division">
                <img
                  class="mobile-product-image"
                  src="flipkartimage/mobileimages/mobile-product-01.webp"
                />
              </div>

            <div class="left-section-product">
              <div class="sponsered">Sponsered</div>
              <div class="mobile-heading">
                <span class="heading-span">realme P4 5G(Steal Grey,256 GB)</span>
              </div>

              <div class="count">
                <span class="span-count">(183)</span>
                    <img class="assured-image" src="flipkartimage/assuredlogo.png" />
              </div>

              <div class="green-arrow-division">
                  <img
                    class="green-arrow-image"
                    src="flipkartimage/greenarrowdown.svg"
                  />
                   <span class="percent-span">30%</span>

                  <div class="amount-division">
                    <span class="amount-span">$9,999</span>
                    <span class="amounttwo-span">$6,999</span>
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
  `;
});

document.querySelector("js-section-five").innerHTML =productHTML;

// cart function needed.