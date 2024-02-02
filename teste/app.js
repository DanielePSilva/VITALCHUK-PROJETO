const imgCarrossel = document.getElementById("img-carrossel");

const img = document.querySelectorAll("#img-carrossel img");

let idx = 0;

function carrossel() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0;
  }

  imgCarrossel.style.transform = `translateX(${-idx * 700}px)`;
}

setInterval(carrossel, 1800);
