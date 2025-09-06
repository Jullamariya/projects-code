

//CREATING HTML USING JAVASCRIPT.


// ****************************************************

// CREATING HTML USING JSON
function productfunction() {
  fetch("./mobile-view.json")
    .then(response => response.json())
    .then(data => {
      const productContainer = document.getElementById("container-plus");

      data.products.forEach(products => {
        const div = document.createElement("div");
        div.classList.add("product-division");

        div.innerHTML = `
          <div class="container-two js-container-two">
            <div id="section">
              <div class="mobile-product-division">
                <img class="mobile-product-image" src="${products.image}" />
              </div>
              <div class="left-section-product">
                <div class="mobile-heading">
                  <span class="heading-span">${products.name}</span>
                </div>
                <div class="count">
                  <span class="span-count">(${products.rating?.count || 0})</span>
                  <img class="assured-image" src="flipkartimage/assuredlogo.png" />
                </div>
                <div class="green-arrow-division">
                  <img class="green-arrow-image" src="flipkartimage/greenarrowdown.svg" />
                  <span class="percent-span">${products.discount || 0}%</span>
                  <div class="amount-division">
                    <span class="amount-span">$${products.priceCross || ""}</span>
                    <span class="amounttwo-span">$${products.priceCents || ""}</span>
                  </div>
                </div>
                <div class="product-division-four">
                  <div class="image-division">
                    <img class="image-wow-logo" src="flipkartimage/wow-image.png" />
                  </div>
                  <div class="offer-division">
                    <span class="bank-offer-text">$${products.bankoffer || ""} with Bank offer</span>
                  </div>
                </div>
                <div class="exchange-division">
                  <span class="upto-span"> Upto </span>
                  <span class="upto-price-span"> ${products.Upto || ""} </span>
                  <span class="exchange-span"> Off on Exchange </span>
                </div>
                <div class="warranty-division">
                  <span class="warranty-span">${products.warranty || ""} year warranty by ${products.offered || ""}</span>
                </div>
              </div>
              <div class="wishlist-division">
                <img class="wishlist-image js-wishlist-image" src="flipkartimage/whishlistheart.svg" />
              </div>
            </div>
          </div>

            <div class="next-page-section">
          <div class="sixram-mobile-division text-ram-width">
            <div class="text-list-mobile">
              <div class="text-list-mobile-division  js-text-list-mobile-division ">
                  ${products.ram || ""}GB RAM | ${products.Storage || ""} GB Storage
                  <p class="js-storage-display"></p>
              </div>
            </div>
          </div>

          

            <div class="js-category-image"></div>
          <div class="list-mobile">
            <div class="sixram-mobile-division">
              <div class="text-list-mobile">
                <div class="text-list-mobile-division">
                  ${products.height || ""} cm (${products.inch || ""} Inch) Full HD+ Display
                </div>
              </div>
            </div>

              <p class="js-storage-size"></p>

            <div class="sixram-mobile-division">
              <div class="text-list-mobile">
                  <div class="text-list-mobile-division">
                      ${products.mAh || ""} mAh
                  </div>
              </div>
            </div>
          </div>
         
          <div class="list-mobile">
            <div class="sixram-mobile-division">
              <div class="text-list-mobile">
                 <div class="text-list-mobile-division">
                      ${products.MP || ""}MP + ${products.MPtwo || ""}MP + 2MP
                  </div>
              </div>
            </div>

                 <p class="js-camera-pixel"></p>

            <div class="sixram-mobile-division">
              <div class="text-list-mobile">
                <div class="text-list-mobile-division">
                      ${products.frontcamera || ""}MP Front Camera
                  </div>
              </div>
            </div>
          </div>
        </div>
          <p class="js-frontcamera-pixel"><p>
        `;

       
        const ramDiv = div.querySelector(".js-text-list-mobile-division");
const storageDisplay = div.querySelector(".js-storage-display");

ramDiv.addEventListener("click",()=>{
  showImage(storageDisplay);
});

productContainer.appendChild(div);
      });
    })
   .catch(error => console.error("Error loading JSON",error)); 
}
productfunction();

let isClicked = false;

function showImage(container){
  container.innerHTML = "";

  if(!isClicked){
    const products = [
      { image:".vscode/Productpage/flipkartimage/   mobileimages/mobileimage.jpeg",
      name:"realme 5G (Birch Wood,128 GB)"
    },
      {
        image:".vscode/Productpage/flipkartimage/mobileimages/poco.jpeg",
        name:"Google Pixel 10 (Frost,256 GB)"
      },
      {
        image:".vscode/Productpage/flipkartimage/mobileimages/realmemobile-product02.jpeg",
        name:"POCO C71 (Cool Blue,128 GB)"
      }
    ];
    products.forEach(products =>{
      container.innerHTML +=`
       <div class="text-list-mobile-division  js-text-list-mobile-division ">
                  ${products.ram || ""}GB RAM | ${products.Storage || ""} GB Storage
                  <p class="js-storage-display"></p>
              </div>`;
    });
    isClicked = true;
  }
  else{
    container.innerHTML ="";
    isClicked = false;
  }
}





/*

function showImage(container){
  container.innerHTML = "";

  if(!isClicked){
    const products = [
      { image:".vscode/Productpage/flipkartimage/   mobileimages/mobileimage.jpeg",
      name:"realme 5G (Birch Wood,128 GB)"
    },
      {
        image:".vscode/Productpage/flipkartimage/mobileimages/poco.jpeg",
        name:"Google Pixel 10 (Frost,256 GB)"
      },
      {
        image:".vscode/Productpage/flipkartimage/mobileimages/realmemobile-product02.jpeg",
        name:"POCO C71 (Cool Blue,128 GB)"
      }
    ];
    products.forEach(products =>{
      container.innerHTML +=`
       <div class="text-list-mobile-division  js-text-list-mobile-division ">
                  ${products.ram || ""}GB RAM | ${products.Storage || ""} GB Storage
                  <p class="js-storage-display"></p>
              </div>`;
    });
    isClicked = true;
  }
  else{
    container.innerHTML ="";
    isClicked = false;
  }
}

