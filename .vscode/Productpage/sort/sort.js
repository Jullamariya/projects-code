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

document.addEventListener("DOMContentLoaded", () => {
  function setupDropdown(buttonId, dropdownId) {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);
    button.addEventListener("click", (e) => {
      // e.stopPropagation(); 
      dropdown.classList.toggle("show");
    });


    
    document.addEventListener("click", (e) => {
      if (!button.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
      }
    });
  }
  setupDropdown("js-category-electronics", "js-dropdown-Menu");
  setupDropdown("js-category-appliances", "js-dropdown-Menutwo");
  setupDropdown("js-category-Men","js-dropdown-Menu-three");
  setupDropdown("js-category-Women","js-dropdown-Menu-four");
});
