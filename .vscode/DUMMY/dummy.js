
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


function username(){
  fetch("./dummy.json")
  .then(response => response.json())
  .then(data=>{
    
  })
}