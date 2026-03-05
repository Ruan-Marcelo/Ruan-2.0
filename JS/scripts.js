const toggle = document.getElementById("theme-toggle");
const body = document.body;
const text = document.getElementById("mode-text");

toggle.addEventListener("click", () => {

  body.classList.toggle("light-mode");
  toggle.classList.toggle("active");

  if(body.classList.contains("light-mode")){
    text.innerText = "ON";
  }else{
    text.innerText = "OFF";
  }

});
