const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const botoesPlataforma = document.querySelectorAll('.btn_plataforma');

botoesPlataforma.forEach(botao => {
  botao.addEventListener('click', () => {
    const elementoPlataformas = botao.querySelector('.cartao_plataformas');
    elementoPlataformas.classList.toggle("ativo");
  });
});


let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide++;

  if (currentSlide >= slides.length) {
    // Se estiver no último slide, volta para o primeiro
    currentSlide = 0;
    slidesContainer.style.transition = ''; // Desativa a transição temporariamente
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    void slidesContainer.offsetWidth; // Force a reflow para aplicar imediatamente a transformação
    slidesContainer.style.transition = ''; // Reativa a transição
  }

  slides[currentSlide].classList.add('active');
  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Inicializa a primeira imagem como ativa
slides[currentSlide].classList.add('active');

setInterval(nextSlide, 4000); // Altere o intervalo para controlar a velocidade dos slides


ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal('#home, #home img, #home p, #home h1, #home a, #gta_five, #gta_five p, #gta_five h1 , #gta_five .historia_personagens ,#gta_five .historia_logo, #gta_online, #gta_online p, #gta_online h1, #gta_online .gta_online_logo, #gta_online .gta_online_personagens, #buy, #buy h2, #buy .cartao');