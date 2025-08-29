

let productHTML = "";

products.forEach((product)=>{
  productHTML = 
  productHTML = productsHTML + 
  `
  <div class="section-five">
   <div class="mobile-product-division">
     <img class="mobile-product-image" src=""/>
   </div>
      <div class="left-section-product">
        <div class="mobile-heading">
           <span class="heading-span">${}</span>
        </div>

        <div class="count">
          <span class="span-count">${}</span>
           <img class="assured-image" src=""/>
        </div>

        <div class="green-arrow-division">
          <img class="green-arrow-image" src=""/>
            <span class="percent-span">${}</span>

            <div class="amount-division">
              <span class="amount-span">$9,999</span>
              <span class="amounttwo-span">${}</span>
            </div>
        </div>

        <div class="product-division-four">
          <div class="image-division">
            <img class="image-wow-logo" src=""/>
          </div>
        </div>

        <div class="offer-division"></div>

      </div>
  </div>
  `
})