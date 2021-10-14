window.addEventListener("DOMContentLoaded", domLoaded);

let page = 0;
let styleSheets = document.styleSheets[0];

function domLoaded() {
  document.getElementById("home").addEventListener("click", function(){
    page=0;
    hidePages();
  });
  document.getElementById("link1").addEventListener("click", function(){
    page=1;
    hidePages();
  });
  document.getElementById("link2").addEventListener("click", function(){
    page=2;
    hidePages();
  });
  document.getElementById("link3").addEventListener("click", function(){
    page=3;
    hidePages();
  });
}
function hidePages(){
  for (let i = 0; i <= 3; i++){
    if (page != i){
      styleSheets.cssRules[i].style.setProperty("display", "none");
    }
    else{
       styleSheets.cssRules[i].style.setProperty("display", "inline");
    }
  }
}