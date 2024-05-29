const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.slider-card');
const leftBtn = document.querySelector('.left-btnnnn');
const rightBtn = document.querySelector('.right-btnnnn');

let currentIndex = 0;

const updateSlider = () => {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  cards.forEach((card, index) => {
    card.classList.toggle('current', index === currentIndex);
  });
};

const showNextCard = () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateSlider();
};

const showPreviousCard = () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateSlider();
};

rightBtn.addEventListener('click', showNextCard);
leftBtn.addEventListener('click', showPreviousCard);

updateSlider(); // Initialize slider



const slider2 = document.querySelector('.slider-2');
const cards2 = document.querySelectorAll('.slider-card-2');
const leftBtn2 = document.querySelector('.left-btn-2');
const rightBtn2 = document.querySelector('.right-btn-2');
const dots = document.querySelectorAll('.dot');

let currentIndex2 = 0;

const updateSlider2 = () => {
    console.log("////")
  slider2.style.transform = `translateX(-${currentIndex2 * 100}%)`;
  cards2.forEach((card, index) => {
    card.classList.toggle('current', index === currentIndex2);
  });
  updateDots();
};

const updateDots = () => {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex2);
  });
};

const showNextCard2 = () => {
  currentIndex2 = (currentIndex2 + 1) % cards2.length;
  updateSlider2();
};

const showPreviousCard2 = () => {
  currentIndex2 = (currentIndex2 - 1 + cards2.length) % cards2.length;
  updateSlider2();
};

rightBtn2.addEventListener('click', showNextCard2);
leftBtn2.addEventListener('click', showPreviousCard2);

updateSlider2(); // Initialize slider


document.querySelectorAll('.menu-items-container a, .menu-button').forEach(item => {
    item.addEventListener('click', () => {
      document.getElementById('menu-toggle').checked = false;
    });
  });