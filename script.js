const starsContainer = document.getElementById('stars-container');
const container = document.getElementById('meteoro-container');

function gerarEstrelas() {
  const numEstrelas = 100;

  for (let i = 0; i < numEstrelas; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const tamanho = Math.random() * 2 + 1;
    star.style.width = `${tamanho}px`;
    star.style.height = `${tamanho}px`;

    const maxWidth = document.documentElement.clientWidth;
    const maxHeight = document.documentElement.clientHeight;

    star.style.left = `${Math.random() * maxWidth}px`;
    star.style.top = `${Math.random() * maxHeight}px`;

    star.style.animation = `twinkle ${
      Math.random() * 5 + 2
    }s infinite ease-in-out`;

    starsContainer.appendChild(star);
  }
}
gerarEstrelas();

function criarMeteoro() {
  const meteoro = document.createElement('div');
  meteoro.classList.add('meteoro');

  meteoro.style.width = `${Math.random() * 2 + 1}px`;
  meteoro.style.height = `${Math.random() * 80 + 40}px`;

  meteoro.style.left = `${Math.random() * window.innerWidth}px`;
  meteoro.style.top = `-${Math.random() * 100}px`;

  container.appendChild(meteoro);

  setTimeout(() => {
    meteoro.remove();
  }, 5000);
}

setInterval(criarMeteoro, 500);

// modal
const getElement = (query) => document.querySelector(query);
const getElements = (query) => document.querySelectorAll(query);

const activeModalClass = 'modal_show';
const activeButtonClass = 'active';

const buttons = getElements('.open_modal_button');
const modals = getElements('.modal_container');

const closeAllModals = () => {
  modals.forEach((modal) => modal.classList.remove(activeModalClass));
  buttons.forEach((button) => button.classList.remove(activeButtonClass));
};

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    closeAllModals();

    const modalId = button.getAttribute('data-target');
    const modalContainer = getElement(`#${modalId}`);

    modalContainer.classList.add(activeModalClass);
    button.classList.add(activeButtonClass);

    modalContainer.addEventListener('click', (event) => {
      const modalContent = modalContainer.querySelector('.modal');
      if (!modalContent.contains(event.target)) {
        modalContainer.classList.remove(activeModalClass);
        button.classList.remove(activeButtonClass);

        setTimeout(() => {
          modalContainer.classList.remove('show');
        }, 500);
      }
    });
  });
});

document.addEventListener('click', (e) => {
  if (
    !e.target.closest('.open_modal_button') &&
    !e.target.closest('.modal_container')
  ) {
    document.querySelectorAll('.modal_container').forEach((modal) => {
      modal.classList.remove('modal_show');
    });
  }
});

document.querySelectorAll('.open_modal_button').forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    document.getElementById(target).classList.add('show');
  });
});

document.querySelectorAll('.modal_container').forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('show');
    }
  });
});
