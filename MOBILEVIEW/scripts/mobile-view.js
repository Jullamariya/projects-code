
                
// ****************************************************************************************************************

function productsfunction(){
  fetch("./mobile-view.json")
  .then(response => response.json())
  .then(data =>{
    const productContainer = document.getElementById("section");
    data.products.forEach(item =>{
      const div = document.createElement("div")
      div.classList.add("section");
      div.innerHTML =` <div class="section-five">

      <div class="mobile-product-division">
        <img
          class="mobile-product-image"
          src="${item.image}"
        />
      </div>

        <div class="left-section-product">
          <div class="sponsered">Sponsered</div>
          <div class="mobile-heading">
            <span class="heading-span">${item.name}</span>
          </div>

          <div class="count">
            <span class="span-count">(${item.rating.count})</span>
                <img class="assured-image" src="flipkartimage/assuredlogo.png" />
          </div>

          <div class="green-arrow-division">
              <img
                class="green-arrow-image"
                src="flipkartimage/greenarrowdown.svg"
              />
                <span class="percent-span">${item.discount}%</span>

              <div class="amount-division">
                <span class="amount-span">${item.pricecross}</span>
                <span class="amounttwo-span">$${item.priceCents}</span>
              </div>
          </div>  

          <div class="product-division-four">

            <div class="image-division">
              <img class="image-wow-logo" src="flipkartimage/wow-image.png" />
            </div>

            <div class="offer-division">
              <span class="bank-offer-text">$${item.offer}with Bank offer</span>
            </div>
          </div>

            <div class="exchange-division">
              <span class="upto-span">
                Upto 
              </span>
                <span class="upto-price-span">
                  $${item.upto} l
                </span>
              <span class="exchange-span">
                  Off on Exchange
              </span>
            </div>
            
            <div class="warranty-division">
              <span class="warranty-span">${item.warranty} year warranty by POCO </span>
            </div>
        </div>
            <div class="wishlist-division">
              <img class="wishlist-image"
                  src="flipkartimage/whishlistheart.svg"
                />
            </div>
    </div>    

          <div class="variant-division">
            <span class="variant-span">View All Variants</span>
         </div>        
         
        <div class="next-page-section">
          <div class="sixram-mobile-division text-ram-width">
            <div class="text-list-mobile">
              <div class="text-list-mobile-division js-text-list-mobile-division "
              data-id"${item.id}">
                 ${item.ram} GB RAM | ${item.storage} GB Storage
                 <div class="js-category-image"></div>
              </div>
            </div>
          </div>
            
          <div class="list-mobile">
            <div class="sixram-mobile-division">
              <div class="text-list-mobile">
                <div class="text-list-mobile-division">
                  ${item.length} cm (${item.inch} Inch) Full HD+ Display
                </div>
              </div>
            </div>

            <div class="sixram-mobile-division">
              <div class="text-list-mobile">
                  <div class="text-list-mobile-division">
                      ${item.mAh} mAh
                  </div>
              </div>
            </div>
          </div>
         
          <div class="list-mobile">
            <div class="sixram-mobile-division">
              <div class="text-list-mobile">
                 <div class="text-list-mobile-division">
                      50MP + 8MP + 2MP
                  </div>
              </div>
            </div>

            <div class="sixram-mobile-division">
              <div class="text-list-mobile">
                <div class="text-list-mobile-division">
                      ${item.camera}MP Front Camera
                  </div>
              </div>
            </div>
          </div>
        </div>

         <div class="variant-division">
          <span class="variant-span">View All Variants</span>
        </div> 
       `;
        productContainer.appendChild(div);
    });
    attachClickHandlers();
  })
  .catch(error => console.error("Error loading JSON",error));
}
productsfunction();


//****************************************************************************************************************

function attachClickHandlers() {
  document.querySelectorAll(".js-text-list-mobile-division").forEach(el => {
    el.addEventListener("click", () => {
      window.location.href = "http://127.0.0.1:5501/.vscode/Productpage/checkoutpage%20/checkout.html";
    });
  });
}

function sortclick(){
  document.getElementById("#js-sort-click").classList.toggle("active");

}
