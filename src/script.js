//Get the button:
btn = document.getElementById("to-top-btn");
ul = document.getElementById("ul-drop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

function topo() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

function menuDrop() {
    if(ul.classList.contains("drop-ativo")) {
        ul.classList.remove("drop-ativo")
        ul.classList.add("drop-desativo");
    } else {
        ul.classList.remove("drop-desativo")
        ul.classList.add("drop-ativo")
    }
}