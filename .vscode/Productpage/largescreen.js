

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
