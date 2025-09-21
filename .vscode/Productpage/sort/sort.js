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

const range = [
  { range: "2G" },
  { range: "3G" },
  { range: "4G" },
  { range: "4G VOLTE" },
  { range: "5.5G" },
  { range: "5G" }
];

let networkHTML = "";

range.forEach((item) => {
  networkHTML += `
    <div class="network-divisonmain" title="${item.range}">
      <div class="network-division3">
        <label class="network-division4">
          <input type="checkbox" class="network-input1" readonly="">
          <div class="network-division5"></div>
          <div class="newtwork-divsion6">${item.range}</div>
        </label>
      </div>
    </div>
  `;
});

// use class selector if HTML has class
document.querySelector(".network-division1").innerHTML = networkHTML;

document.querySelector(".section-3").addEventListener("click", function togglework() {
  const dropdown = document.querySelector(".network-division1");
  dropdown.classList.toggle("active");
});




