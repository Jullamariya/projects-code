      /**** Category-list function****/

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

      /**** selecting network function ****/

const selectitem = [
  {selected: "2G" },
  {selected:"3G"}
  ];

function selectedItem() {
  const dropdown = document.getElementById("select-division-1");

  if (!dropdown.innerHTML) {
    
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


      /**** networktype function ****/

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
          <div class="network-division2" id="network-division2">
                  <div class="network-divisonmain" title="${item.range}">
                    <div class="network-division3">
                      <label class="network-division4">
                      <input type="checkbox" class="network-input1" readonly="">
                      <div class="network-division5"></div>
                      <div class="newtwork-divsion6">${item.range}</div>
                    </label>
                  </div> 
                </div>
              </div> 
        `;
      });

      document.querySelector(".network-division1").innerHTML = networkHTML;

      document.querySelector(".section-3").addEventListener("click", function togglework() {
        const dropdown = document.querySelector(".network-division1");
        dropdown.classList.toggle("active");
      });


                    /****Brand-toggler ****/

      const brand = [
        { brandName: "Apple" },
        { brandName: "Google" },
        { brandName: "MOTOROLA" },
        { brandName: "vivo" },
        { brandName: "OPPO" },
        { brandName: "Infinix" }
      ];

      let brandHTML = "";
      brand.forEach((item) => {
        brandHTML += `
              <div class="brandname-division1" title="${item.brandName}">
                <div class="brandname-division2">
                  <label class="brandname-label">
                    <input type="checkbox" class="brandname-division3">
                    <div class="brandname-division4"></div>
                    <div class="brand-name">${item.brandName}</div>
                  </label>
                </div>
              </div>
        `;
      });
      brandHTML += `
     <div class=count-more>
        <span class=count-span>119 MORE</span>
      </div>`

      document.querySelector("#brand-division1").innerHTML = brandHTML;

      document.querySelector("#brand-section-4").addEventListener("click", function () {
        document.querySelector("#brand-division1").classList.toggle("active");
      });


              /****price range slider click function****/

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
