function toggleList() {
  const panel = document.getElementById("sort-panel");
  panel.classList.toggle("show");
}



// document.addEventListener("DOMContentLoaded", () => {
//   const electronics = document.getElementById("js-category-electronics"); 
//   // where the eventListner should apply
//   const dropdown = document.getElementById("js-dropdown-Menu");
// //what should the eventListener apply
//   electronics.addEventListener("click", (e) => {
//      e.stopPropagation();
//     dropdown.classList.toggle("show"); 
//     // show visible the list while it's been click.
//   });

//   // then on the next click the the drop down list should be removed.
//   // here "e" is the short form of event.when an event is used it will be passed in the function also contain the 
//   //e.target is the element that should be clicked.
//   document.addEventListener("click", (e) => {
//     if (!electronics.contains(e.target) && !dropdown.contains(e.target)) {
//       dropdown.classList.remove("show");
//     }
//   });
// });


// document.addEventListener("DOMContentLoaded",()=>{
//   const appliances = document.getElementById("js-category-appliances");
//   const droplist = document.getElementById("js-dropdown-Menutwo");
//   appliances.addEventListener("click",()=>{
//     droplist.classList.toggle("show");
//   });
//   document.addEventListener("click",(e)=>{
//     if(!appliances.contains(e.target)&& !droplist.conatains(e.target)){
//       droplist.classList.remove("show");
//     }
//   })
// })

/*SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSs*/

// document.addEventListener("DOMContentLoaded", () => {
//   function setupDropdown(buttonId, dropdownId) {
//     const button = document.getElementById(buttonId);
//     const dropdown = document.getElementById(dropdownId);
//     button.addEventListener("click", (e) => {
//       // e.stopPropagation(); 
//       dropdown.classList.toggle("show");
//     });


    
//     document.addEventListener("click", (e) => {
//       if (!button.contains(e.target) && !dropdown.contains(e.target)) {
//         dropdown.classList.remove("show");
//       }
//     });
//   }
//   setupDropdown("js-category-electronics", "js-dropdown-Menu");
//   setupDropdown("js-category-appliances", "js-dropdown-Menutwo");
//   setupDropdown("js-category-Men","js-dropdown-Menu-three");
//   setupDropdown("js-category-Women","js-dropdown-Menu-four");
// });


// function Itemenu(){
//   fetch("./sort.json")
//   .then(response => response.json())
//   .then(data =>{
//     const menuContainer = document.getElementById("js-dropdown-menu");
//     data.menuItems.forEach(item =>{
//       const div = document.createElement("div")
//       div.classList.add("wZsanD");
//       div.innerHTML = ` <div class="wZsanD">
//                 <a title="${item.item}" class="cNDIdi CP4tVY">${item.item}</a>
//                 <a title="${item.Mi}" class="jBYtJt">${item.Mi}</a>
//                 <a title="${item.Realme}" class="jBYtJt">${item.Realme}</a>
//                 <a title="${item.Samsung}" class="jBYtJt">${item.Samsung}</a>
//                 <a title="${itemInfinix}" class="jBYtJt">${itemInfinix}</a>
//                 <a title="${item.OPPO}" class="jBYtJt">${item.OPPO}</a>
//                 <a title="${item.Apple}" class="jBYtJt">${item.Apple}"</a>
//                 <a title="${item.Vivo}" class="jBYtJt" >${item.Vivo}</a>
//                 <a title="${item.Honor}" class="jBYtJt" >${item.Honor}</a>
//                 <a title="${item.Asus}" class="jBYtJt" >${item.Asus}</a>
//                 <a title="${item.Poco}" class="jBYtJt">${item.Poco}</a>
//                 <a title="${item.realme}" class="jBYtJt" >${item.realme}</a>
//                 <a title="${item.InfinixHot}" class="jBYtJt" >${item.InfinixHot}</a>
//                 <a title="${item.IQOO}" class="jBYtJt" >${item.IQOO}"</a>
//                 <a title="${item.Motorola}" class="jBYtJt">${item.Motorola}</a>
//                 <a title="${item.realmeNarzo}" class="jBYtJt">${item.realmeNarzo}</a>
//                 <a title="${item.Motorolapowerlite}"  class="jBYtJt">${item.Motorolapowerlite}</a> 
//               </div>
// `
//     });
//     div.innerHTML = html;
//         menuContainer.appendChild(div);
//   })
// }

/**/

const selectitem = [
  {selected: "2G" },
  {selected:"3G"}
  ];

function selectedItem() {
  const dropdown = document.getElementById("select-division-1");

  if (!dropdown.innerHTML) {
    // Build HTML from the array
    let html = "";
    selectitem.forEach((item) => {
      html += `
          <div class="select-division-2">
            <div class="select-division-3">
              <div class="select-division-4">✕</div>
              <div class="select-division-5" id="selected-items">
                <div id="dropdown-options">
                  <div class="option" onclick="selectedItem('${item.selected}')">${item.selected}</div>
                </div>
              </div>
            </div>
         </div>
      `;
    });

    dropdown.innerHTML = html;
    dropdown.style.display = "block";
  } else {
    dropdown.innerHTML = "";
    dropdown.style.display = "none";
  }
}





// const range = [
//   { range: "2G" },
//   { range: "3G" },
//   { range: "4G" },
//   { range: "4G VOLTE" },
//   { range: "5.5G" },
//   { range: "5G" }
// ];

// let networkHTML = "";
// range.forEach((item) => {
//   networkHTML += `
//      <div class="network-division2">
//         <div class="network-divisonmain" title="${item.range}">
//           <div class="network-division3">
//             <label class="network-division4">
//               <input type="checkbox" class="network-input1">
//               <div class="network-division5"></div>
//               <div class="newtwork-divsion6">${item.range}</div>
//             </label>
//           </div> 
//         </div>
//      </div> 
//   `;
// });

// document.querySelector(".network-division1").innerHTML = networkHTML;

// document.querySelector(".section-3").addEventListener("click", function () {
//   document.querySelector(".network-division1").classList.toggle("active");
// });

// const brand = [
//   { brandName: "Apple" },
//   { brandName: "Google" },
//   { brandName: "MOTOROLA" },
//   { brandName: "vivo" },
//   { brandName: "OPPO" },
//   { brandName: "Infinix" }
// ];

// let brandHTML = "";
// brand.forEach((item) => {
//   brandHTML += `
     
//         <div class="brandname-division1" title="${item.brandName}">
//           <div class="brandname-division2">
//             <label class="brandname-label">
//               <input type="checkbox" class="brandname-division3">
//               <div class="brandname-division4"></div>
//               <div class="brand-name">${item.brandName}</div>
//             </label>
//           </div>
//         </div>
      
//   `;
// });

// document.querySelector("#brand-division1").innerHTML = brandHTML;

// document.querySelector("#brand-section-4").addEventListener("click", function () {
//   document.querySelector("#brand-division1").classList.toggle("active");
// });




const price = [
  {amount:"10,000"},
  {amount:"15,000"},
  {amount:"20,000"},
  {amount:"30,000"}
];

let minOption = `<option value="min" class="minimum">Min
</option>`
let maxOption="";

price.forEach((item)=>{

     minOption += `<option value="${item.amount}" class="minimum">₹${item.amount}</option>`;
     maxOption += `<option value="${item.amount}">${item.amount}</option>`
});
maxOption += `<option value="max">₹30000+</option>`;
document.querySelector("#select-1").innerHTML = minOption;
document.querySelector("#select-2").innerHTML = maxOption;





// to make the functio responsive add all the css & js files including their width and declaire media query at the end of the css file.