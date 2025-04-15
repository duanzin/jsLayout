import shirtImage from "../../images/2j0a2073 1.png";

export function createLancamentos() {
  const productItems = Array(5)
    .fill(
      `
      <li>
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
      <ul class="product-list">
        <span class="arrow">
          <i class="material-icons-outlined">arrow_back</i>
        </span>
        ${productItems}
        <span class="arrow">
          <i class="material-icons-outlined">arrow_forward</i>
        </span>
      </ul>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
    `;
}
