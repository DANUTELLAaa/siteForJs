let slideIndex = 0;
const images = ['ataki1.png', 'ataki2.png', 'ataki3.png', 'ataki4.png'];
const productImage = document.getElementById('product-image');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

function showSlide(n) {
  productImage.src = images[n];
}

prevBtn.addEventListener('click', () => {
  console.log('Нажата кнопка назад');
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = images.length - 1;
  }
  showSlide(slideIndex);
});

nextBtn.addEventListener('click', () => {
  slideIndex++;
  console.log('Нажата кнопка вперед');
  if (slideIndex >= images.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
});

document.addEventListener('DOMContentLoaded', () => {
  const specNames = document.querySelectorAll('.spec-name');

  specNames.forEach(name => {
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.textContent = name.getAttribute('data-tooltip');
    name.appendChild(tooltip);
  });
});
