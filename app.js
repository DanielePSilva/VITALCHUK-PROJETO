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
  transitionTime: 4,
  delay: 4.0,
});

// slider services
// document.addEventListener("DOMContentLoaded", function () {
const slider = simpleslider.getSlider({
  container: document.getElementById("trabalhos"),
  transitionTime: 0,
  delay: 3.5,
});

//   document.getElementById("prevBtn").addEventListener("click", function () {
//     slider.prevSlide(); // Função para ir para o slide anterior
//   });

//   // Event listener para o botão próximo
//   document.getElementById("nextBtn").addEventListener("click", function () {
//     slider.nextSlide(); // Função para ir para o próximo slide
//   });
// });
