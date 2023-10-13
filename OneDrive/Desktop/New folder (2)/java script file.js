const psb = document.getElementById("previousSlide");
const nsb = document.getElementById("nextSlide");
const chv = document.querySelector(".presentation .chapter:first-child");
const pos = document.querySelector(".titles .position");
var cs = 0;

updateButtons();

nsb.addEventListener("click", (e) => {
  if (cs < chv.childElementCount - 1) {
    ++cs;
    updateButtons();
    updatePosition();
  }
});

psb.addEventListener("click", (e) => {
  if (cs !== 0) {
    --cs;
    updateButtons();
    updatePosition();
  }
});

function updateButtons() {
  
  if (cs === 0) {
    psb.disabled = true;
    nsb.disabled = false;
  } else if (cs === chv.childElementCount - 1) {
    psb.disabled = false;
    nsb.disabled = true;
  } else {
    psb.disabled = false;
    nsb.disabled = false;
  }
}

function updatePosition() {
  
  pos.innerHTML = cs + 1;
  chv.style.transform = "translateX(" + -100 * cs + "vw)";
}
