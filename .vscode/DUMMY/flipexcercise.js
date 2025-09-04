
  function flipkart() {
    fetch("./flipexcercise.json")
      .then(response => response.json())
      .then(data => {
        const flipkartContainer = document.getElementById("flipkart-division");

        data.cartproduct.forEach(item => {
          const div = document.createElement("div");
          div.classList.add("productdetails");
          div.innerHTML = `
            <div>${item.name}</div>
            <div>${item.price}</div>
            <div>${item.deliveryDate}</div>
            <div>${item.ShippingAmount}</div>
          `;
          flipkartContainer.appendChild(div);
        });
      })
      .catch(error => console.error("Error loading JSON", error));
  }

  flipkart();
      

          
  function alphabetarray(){
    fetch("./alphabets.json")
    .then(response => response.json())
    .then(data =>{
      const alphabetContainer = document.getElementById("jsontest");

      data.alphabets.forEach(item =>{
        const div = document.createElement("div")
        div.classList.add("test")
        div.innerHTML = `
        <div>${item.alphabetone}</div>
        <div>${item.alphabettwo}</div>
        <div>${item.alphabetthree}</div>`;
        alphabetContainer.appendChild(div);
      });
      data.places.forEach(item=>{
        const div = document.createElement("div");
        div.classList.add("places")
        div.innerHTML = `
        <div>${item.placeone}</div>
        <div>${item.placetwo}</div>
        <div>${item.placethree}</div>`;
        alphabetContainer.appendChild(div);
      });
      data.language.forEach(item=>{
        const div = document.createElement("div");
        div.classList.add("language")
        div.innerHTML = `
        <div>${item.languageone}</div>
        <div>${item.languagetwo}</div>
        <div>${item.languagethree}</div>`;
        alphabetContainer.appendChild(div);
      });
    })
    .catch(error => console.error("Error loading JSON", error));
  }
  alphabetarray();

  