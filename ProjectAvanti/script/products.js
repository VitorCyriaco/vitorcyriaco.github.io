import products from "./data/products.js";

// Function to create product cards dynamically
window.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-card");

  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "w-64 bg-white border border-[#DDDDDD] rounded-lg shadow-md p-4";

    card.innerHTML = `
        <div class="w-[174px] relative flex justify-center">
          <div class="absolute top-0 left-0 px-2 py-1 rounded-sm bg-[#00264E]">
            <p class="text-white text-[10px] font-bold">NOVO</p>
          </div>
          <img src="${product.img}" alt="${product.name}" class="h-40 object-contain mt-4">
        </div>
        <h3 class="text-[12px] font-semibold mt-2">${product.name}</h3>
                <div class="flex px-1 align-center mt-2 h-1/8">
                    <div class="w-3/7">
                        <p class="line-through text-[12px] px-1">${product.previousPrice}</p>
                        <p class="text-[16px] font-bold px-1">${product.currentPrice}</p>
                    </div>
                    <div class="flex w-auto max-w-[100px] h-5 rounded-sm px-2 ml-2 items-center justify-center" style="background-color: #5EC0BE;">
                        <p class="text-white text-[11px] font-bold">${product.save} OFF</p>
                    </div>
                </div>
                <span>
                    <p class="text-[12px] mx-1 my-1 px-1">Ou em até <strong>10x de ${product.installment}</strong></p>
                </span>
                <span class="w-full px-2">
                    <button class="text-white rounded-sm w-9/10 my-1 h-[40px]"
                        style="background-color: #005CFF;">Comprar</button>
                </span>
      `;

    productList.appendChild(card);
  });
});

// Auto-scroll functionality for the product card carousel
const carousel = document.getElementById('product-card');
const elipses = document.querySelectorAll('.elipse');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

let scrollPosition = 0;

function setActiveElipse(index) {
  elipses.forEach((elipse, i) => {
    elipse.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  if (carousel.scrollWidth > carousel.clientWidth) {
    scrollPosition += carousel.clientWidth;

    if (scrollPosition >= carousel.scrollWidth) {
      scrollPosition = 0;
    }

    carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });

    const currentSlide = Math.floor(scrollPosition / carousel.clientWidth);
    setActiveElipse(currentSlide);
  }
}, 5000);

elipses.forEach((elipse, index) => {
  elipse.addEventListener('click', () => {
    scrollPosition = carousel.clientWidth * index;
    carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
    setActiveElipse(index);
  });
});

setActiveElipse(0);

// Arrow buttons functionality for manual scrolling
arrowLeft.addEventListener('click', () => {
  scrollPosition -= carousel.clientWidth;

  if (scrollPosition < 0) {
    scrollPosition = 0;
  }

  carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });

  const currentSlide = Math.floor(scrollPosition / carousel.clientWidth);
  setActiveElipse(currentSlide);
});

arrowRight.addEventListener('click', () => {
  scrollPosition += carousel.clientWidth;

  if (scrollPosition >= carousel.scrollWidth) {
    scrollPosition = 0;
  }

  carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });

  const currentSlide = Math.floor(scrollPosition / carousel.clientWidth);
  setActiveElipse(currentSlide);
});