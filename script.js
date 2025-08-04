function animarContador(id, valorFinal, duracao) {
  const elemento = document.getElementById(id);
  let inicio = 0;
  const incremento = valorFinal / (duracao / 16);

  const animar = () => {
    inicio += incremento;
    if (inicio >= valorFinal) {
      elemento.innerText = valorFinal.toLocaleString("pt-BR");
    } else {
      elemento.innerText = Math.floor(inicio).toLocaleString("pt-BR");
      requestAnimationFrame(animar);
    }
  };

  requestAnimationFrame(animar);
}

// Dados dos contadores
const contadores = [
  { id: "clubes", valor: 8, duracao: 1000 },
  { id: "associados", valor: 394, duracao: 1200 },
  { id: "anos", valor: 49, duracao: 1000 },
];

// Observer
let animado = false;

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !animado) {
      animado = true;
      contadores.forEach((contador) => {
        animarContador(contador.id, contador.valor, contador.duracao);
      });
    }
  },
  {
    threshold: 0.4, // ativa quando 60% da seção estiver visível
  }
);

// Observar a seção dos contadores
const secaoContadores = document.querySelector(".contadores");
observer.observe(secaoContadores);

// Defina a data e hora alvo para a contagem regressiva
// Formato: Ano, Mês (0=Jan, 1=Fev...), Dia, Hora, Minuto, Segundo
// Exemplo: 31 de Dezembro de 2025 às 23:59:59
const targetDate = new Date(2025, 9, 14, 0, 0, 0).getTime();

const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("countdown-message");
const diasElement = document.getElementById("dias");
const horasElement = document.getElementById("horas");
const minutosElement = document.getElementById("minutos");
const segundosElement = document.getElementById("segundos");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Se a contagem regressiva terminou
  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.style.display = "none"; // Esconde os números
    messageElement.style.display = "block"; // Mostra a mensagem de finalizado
    return;
  }

  // Cálculos de tempo para dias, horas, minutos e segundos
  const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distance % (1000 * 60)) / 1000);

  // Adiciona um zero à esquerda se o número for menor que 10
  diasElement.textContent = String(dias).padStart(2, "0");
  horasElement.textContent = String(horas).padStart(2, "0");
  minutosElement.textContent = String(minutos).padStart(2, "0");
  segundosElement.textContent = String(segundos).padStart(2, "0");
}

// Atualiza a contagem regressiva a cada 1 segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Chama a função uma vez imediatamente para evitar delay inicial
updateCountdown();

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1440: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  },
});
