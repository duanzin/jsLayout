import shirtImage from "../../images/2j0a2073 1.png";

export function createLancamentos() {
  document.addEventListener("DOMContentLoaded", () => {
    const productList = document.querySelector(".product-list");
    const arrowBack = document.querySelector(".arrow-back");
    const arrowForward = document.querySelector(".arrow-forward");
  
    let scrollPosition = 0;
    const scrollAmount = 255;
  
    arrowForward.addEventListener("click", () => {
      const maxScroll = productList.scrollWidth - productList.clientWidth;
      scrollPosition = Math.min(scrollPosition + scrollAmount, maxScroll);
      productList.style.transform = `translateX(-${scrollPosition}px)`;
    });
  
    arrowBack.addEventListener("click", () => {
      scrollPosition = Math.max(scrollPosition - scrollAmount, 0);
      productList.style.transform = `translateX(-${scrollPosition}px)`;
    });
  
    let startX = 0;
    let currentX = 0;
    let isDragging = false;
  
    productList.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });
  
    productList.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      const deltaX = startX - currentX;
  
      const maxScroll = productList.scrollWidth - productList.clientWidth;
      scrollPosition = Math.min(Math.max(scrollPosition + deltaX, 0), maxScroll);
      productList.style.transform = `translateX(-${scrollPosition}px)`;
  
      startX = currentX;
    });
  
    productList.addEventListener("touchend", () => {
      isDragging = false;
    });
  });

  const productItems = Array(15)
    .fill(
      `
      <li>
        <span class="new-product">NOVO</span>
        <img src=${shirtImage} alt="Produto" />
        <div class="product-info">
          <h3>Lorem ipsum dolor sit amet consectetuer adipiscing elit</h3>
          <div>
            <p>
              <s>R$100,00</s></br>
              <strong>R$79,90</strong>
            </p>
            <span>10% OFF</span>
          </div>
          <p>Ou em até <b>10x de R$ 7,90</b></p>
        </div>
        <button>Comprar</button>
      </li>
    `
    )
    .join("");
  return `
  <section class="lancamentos">
    <div>
      <h2>Lançamentos</h2>
      <span>Ver mais</span>
    </div>
    <div class="carousel-wrapper">
      <span class="arrow arrow-back">
        <i class="material-icons-outlined">arrow_back</i>
      </span>
      <div class="carousel-container">
        <ul class="product-list">
          ${productItems}
        </ul>
      </div>
      <span class="arrow arrow-forward">
        <i class="material-icons-outlined">arrow_forward</i>
      </span>
    </div>
  </section>
  `;
}
