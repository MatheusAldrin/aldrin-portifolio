// Referências aos containers no DOM
const starsContainer = document.getElementById("stars-container");
const container = document.getElementById("meteoro-container");

// Função para gerar estrelas
function gerarEstrelas() {
  const numEstrelas = 100; // Número de estrelas

  for (let i = 0; i < numEstrelas; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    // Tamanho aleatório para dar variação nas estrelas
    const tamanho = Math.random() * 2 + 1;
    star.style.width = `${tamanho}px`;
    star.style.height = `${tamanho}px`;

    // Posição aleatória para cada estrela, fixada ao viewport
    const maxWidth = document.documentElement.clientWidth;
    const maxHeight = document.documentElement.clientHeight;

    star.style.left = `${Math.random() * maxWidth}px`;
    star.style.top = `${Math.random() * maxHeight}px`;

    // Animação de piscar (twinkle)
    star.style.animation = `twinkle ${
      Math.random() * 5 + 2
    }s infinite ease-in-out`;

    // Adicionar a estrela ao container
    starsContainer.appendChild(star);
  }
}

// Chama a função para gerar as estrelas
gerarEstrelas();

// Função para criar um meteoro
function criarMeteoro() {
  const meteoro = document.createElement("div");
  meteoro.classList.add("meteoro");

  // Tamanho aleatório para os meteoros
  meteoro.style.width = `${Math.random() * 2 + 1}px`;
  meteoro.style.height = `${Math.random() * 80 + 40}px`;

  // Posicionamento inicial aleatório fora da tela (em várias posições X, mas um pouco acima da tela)
  meteoro.style.left = `${Math.random() * window.innerWidth}px`;
  meteoro.style.top = `-${Math.random() * 100}px`;

  // Adicionar o meteoro ao container
  container.appendChild(meteoro);

  // Remover o meteoro após a animação terminar
  setTimeout(() => {
    meteoro.remove();
  }, 3000); // Duração da animação (3 segundos)
}

// Criar meteoros a cada intervalo de 700ms
setInterval(criarMeteoro, 700);

// modal
const getElement = (...queries) => document.querySelector(...queries);

const button = getElement(".open_modal_button");
const modalContainer = getElement(".modal_container");
const modal = getElement(".modal");

const activeModalClass = "modal_show";

const openModal = () => modalContainer.classList.add(activeModalClass);
const closeModal = () => modalContainer.classList.remove(activeModalClass);

button.addEventListener("click", openModal);
modalContainer.addEventListener("click", (event) => {
  if (modal.contains(event.target)) return;
  closeModal();
});
