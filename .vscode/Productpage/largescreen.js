

document.addEventListener("DOMContentLoaded", () => {
  function setupDropdown(buttonId, dropdownId) {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);
    button.addEventListener("click", (e) => {
      e.stopPropagation(); 
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




