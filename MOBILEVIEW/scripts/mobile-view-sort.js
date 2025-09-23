
function toggleList() {
  console.log("Toggle function is called")
  const panel = document.getElementById("bottom-list");
  // panel.classList.toggle("show");
  if(!panel){
    console.error("Element with id 'bottom-list' not found");
    return;
  }
  panel.classList.toggle("show");
}
