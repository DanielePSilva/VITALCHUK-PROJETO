function toggleTexto() {
  const texto = document.getElementById("texto");

  if (texto.style.display === "none" || texto.style.height === "0px") {
    texto.style.display = "block";
    texto.style.height = texto.scrollHeight + "px";
  } else {
    texto.style.height = "0px";
  }
}

//slide
simpleslider.getSlider({
  container: document.getElementById("myslider"),
  transitionTime: 1,
  delay: 3.5,
});
