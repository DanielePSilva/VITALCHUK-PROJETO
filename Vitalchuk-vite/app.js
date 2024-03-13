//texto encapsulado//
function toggleTexto() {
  const texto = document.getElementById("texto");
  const buttonRead = document.getElementById("ButtonRead-btn");

  if (texto.style.display === "none" || texto.style.height === "0px") {
    texto.style.display = "block";
    texto.style.height = texto.scrollHeight + "px";
    buttonRead.textContent = "<< Voltar";
  } else {
    texto.style.height = "0px";
    buttonRead.textContent = "Leia Mais...";
  }
}

//slide//
simpleslider.getSlider({
  container: document.getElementById("myslider"),
  transitionTime: 4,
  delay: 4.0,
});

// slider services//

$(document).ready(function () {
  const slider = simpleslider.getSlider({
    container: document.getElementById("trabalhos"),
    transitionTime: 0,
    delay: 3,
  });

  $(".next").on("click", function () {
    slider.next();
  });

  $(".prev").on("click", function () {
    slider.prev();
  });
});

window.toggleTexto = toggleTexto;
