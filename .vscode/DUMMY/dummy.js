
//******************************************************* */

// async function loadProducts(){
//   try{
//     const response = await fetch("./dummy.json");
//   const products = await response.json();
//   console.log(products);
// }catch(error){
//  console.error("Error loading JSON:",error);
//   }
// }
// loadProducts();

// async function displayProducts(){
//   const response = await fetch("./dummy.json");
//   const products = await response.json();

//   const container = document.getElementById("section-five");

//   products.forEach(product=>{
//     const div = document.createElement("div");
//     div.classList.add("product-card");

//      div.innerHTML = `
//       <img src="${product.image}" alt="${product.name}" width="100">
//       <h3>${product.name}</h3>
//       <p>⭐ ${product.rating.stars} (${product.rating.count})</p>
//       <p><del>₹${product.pricecross}</del> <strong>₹${(product.priceCents / 100).toLocaleString()}</strong></p>
//     `;

//     container.appendChild(div);
//   })
// }
// displayProducts();

//****************************************************/


// async function fruitsName(){
//    const fruits = await fetch("./fruits.json");
//    const fruitname = await fruits.json();
//    const fruitcontainer = document.getElementById("fruits-name");

// fruitname.fruits.forEach(product =>{
//     const div = document.createElement("div");
//     div.classList.add("names");
//     div.innerHTML = `
//      <div>${product.fruit}</div>
//     `;
//     fruitcontainer.appendChild(div);
//    })
// }
// fruitsName();

//*************************************************** */

function fruitsName(){
  fetch("./fruits.json")
  .then(response => response.json())
  .then(data =>{

    const fruitContainer = document.getElementById("fruits-name");
    const vegContainer = document.getElementById("vegetables-name");
    const foodContainer = document.getElementById("food-name");

    data.fruits.forEach(item=>{
      const div = document.createElement("div");
      div.classList.add("names");
      div.innerHTML = `<div>${item.fruit}</div>`;
      fruitContainer.appendChild(div);
    });
    
    data.vegetables.forEach(item=>{
      const div = document.createElement("div");
      div.classList.add("names");
      div.innerHTML = `<div>${item.vegetable}</div>`;
      vegContainer.appendChild(div);
    });

    data.foods.forEach(item=>{
      const div = document.createElement("div");
      div.classList.add("names");
      div.innerHTML = `<div>${item.food}</div>`;
      foodContainer.appendChild(div);
    });
  })
  .catch (error => console.error("Error loading JSON",error));

}
fruitsName();

//**************************************************** 

function userName(){
  fetch("./dummy.json")
  .then(response => response.json())
  .then(data => {
    const UsersContainer = document.getElementById("username");

    data.username.forEach(item =>{
      const div = document.createElement("div");
      div.classList.add("names");
      div.innerHTML = `<div>${item.name}</div>`
      UsersContainer.appendChild(div);
    });
    data.username.forEach(item =>{
      const div = document.createElement("div");
      div.classList.add("names");
      div.innerHTML = `<div>${item.age}</div>`
      UsersContainer.appendChild(div);
    });
    data.username.forEach(item =>{
      const div = document.createElement("div");
      div.classList.add("names");
      div.innerHTML = `<div>${item.place}</div>`
      UsersContainer.appendChild(div);
    });
  })
  .catch(error => console.error("Error loading JSON",error));
}
userName();

//********************************************************


// <script>
//   const menuItems = [
//     { name: "My Profile", icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" },
//     { name: "Flipkart Plus Zone", icon: "M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z" },
//     { name: "Orders", icon: "M19 3H5c-1.1 0-2 .9-2 2v14l7-3 7 3V5c0-1.1-.9-2-2-2z" },
//     { name: "Wishlist", icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" },
//     { name: "Rewards", icon: "M12 2L15.09 8.26 22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01z" },
//     { name: "Gift Cards", icon: "M20 6h-2.18C17.4 4.84 16.3 4 15 4s-2.4.84-2.82 2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 0c.55 0 1 .45 1 1s-.45 1-1 1h-2V7c0-.55.45-1 1-1h1zm-4 6H6V8h5v4z" }
//   ];

//   const dropdownMenu = document.getElementById("dropdownMenu");

//   menuItems.forEach(item => {
//     const div = document.createElement("div");
//     div.classList.add("dropdown-item");
//     div.innerHTML = `
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//         <path d="${item.icon}"></path>
//       </svg>
//       <span>${item.name}</span>
//     `;
//     dropdownMenu.appendChild(div);
//   });

//   // Toggle dropdown
//   document.querySelector(".dropdown-btn").addEventListener("click", () => {
//     dropdownMenu.classList.toggle("show");
//   });
// </script>


/*********************************************************** */

const menuItems =[
  {name:"Mi"},
  {name:"Realme"},
 {name:"samsung"}
]
let menuHTML = "";
menufunction.forEach((menu)=>{
  menuHTML = menuHTML + 
  `<div class="wZsanD">
              <a title="Mobiles" class="cNDIdi CP4tVY">Mobiles</a>
              <a title="${menu.name}" class="jBYtJt">${menu.name}</a>
              <a title="${menu.name}}" class="jBYtJt">${menu.name}</a>
              <a title="${menu.name}" class="jBYtJt">${menu.name}</a>
            </div>
  `;
});
 document.querySelector("#js-dropdown-Menu").innerHTML = menuHTML;
