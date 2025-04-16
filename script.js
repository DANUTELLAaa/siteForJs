

function showSlide(n) {
  productImage.src = images[n];
}

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  const closeBtn = document.querySelector('.close-btn');
  const orderForm = document.getElementById('order-form');
  let slideIndex = 0;
  const images = ['photo/ataki1.png', 'photo/ataki2.png', 'photo/ataki3.png', 'photo/ataki4.png'];
  const productImage = document.getElementById('product-image');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  const specNames = document.querySelectorAll('.spec-name');

  prevBtn.addEventListener('click', () => {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = images.length - 1;
    }
    showSlide(slideIndex);
  });
  
  nextBtn.addEventListener('click', () => {
    slideIndex++;
    if (slideIndex >= images.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  });

  specNames.forEach(name => {
    const tooltip = document.createElement('span');
    tooltip.classList.add('tooltip');
    tooltip.textContent = name.getAttribute('data-tooltip');
    name.appendChild(tooltip);
  });


  addToCartBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });


  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  orderForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = orderForm.name.value.trim();
    const phone = orderForm.phone.value.trim();

    if (name === '' || phone === '') {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

  
    alert(`Спасибо, ${name}! Ваш заказ принят. Мы свяжемся с вами по номеру ${phone}.`);


    modal.style.display = 'none';
    orderForm.reset();
    });

    const relatedCards = document.querySelectorAll('.related-product-card');
    relatedCards.forEach(card => {
      card.style.cursor = 'pointer'; 
      card.addEventListener('click', () => {
        window.location.href = '404.html';
      });
    });

    const container = document.querySelector('.related-products-container');
    const leftBtn = document.querySelector('.left-btn');
    const rightBtn = document.querySelector('.right-btn');
    const scrollAmount = 200;

    leftBtn.addEventListener('click', () => {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    });

    rightBtn.addEventListener('click', () => {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    });
});





