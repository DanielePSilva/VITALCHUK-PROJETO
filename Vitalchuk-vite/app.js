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

const slider = simpleslider.getSlider({
  container: document.getElementById("trabalhos"),
  transitionTime: 0,
  delay: 3.5,
});

window.toggleTexto = toggleTexto;
