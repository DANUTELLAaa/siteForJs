const productImage = document.querySelector('.product-image');

productImage.addEventListener('mouseenter', () => {
    productImage.style.transform = 'scale(1.1)';
    productImage.style.transition = 'transform 0.3s';
});

productImage.addEventListener('mouseleave', () => {
    productImage.style.transform = 'scale(1)';
});
let slideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slidesContainer = document.querySelector('.slides');

// Функция для показа слайда
function showSlide(n) {
  slidesContainer.style.transform = `translateX(${-n * 500}px)`;
}

// Обработчики событий для кнопок
prevBtn.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
});