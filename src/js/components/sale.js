import saleImage from '../../images/Rectangle 10.png';

export function createSale() {
    return `
      <section class="sale">
        <img src="${saleImage}" alt="Promoção de roupas" />
        <div class="sale-text">
          <h2><b>SUPER</b>SALE</h2>
          <p>Itens selecionados com até </br><strong>50% OFF</strong></p>
        </div>
      </section>
    `;
  }