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

const contadores = [
  { id: "clubes", valor: 8, duracao: 1000 },
  { id: "associados", valor: 394, duracao: 1200 },
  { id: "anos", valor: 49, duracao: 1000 },
];

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
    threshold: 0.4,
  }
);

const secaoContadores = document.querySelector(".contadores");
observer.observe(secaoContadores);