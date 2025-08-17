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

  if (distance < 0) {
    clearInterval(countdownInterval);
    countdownElement.style.display = "none";
    messageElement.style.display = "block";
    return;
  }

  const dias = Math.floor(distance / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distance % (1000 * 60)) / 1000);

  diasElement.textContent = String(dias).padStart(2, "0");
  horasElement.textContent = String(horas).padStart(2, "0");
  minutosElement.textContent = String(minutos).padStart(2, "0");
  segundosElement.textContent = String(segundos).padStart(2, "0");
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();