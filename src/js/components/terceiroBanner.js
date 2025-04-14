import AvantiBanner from '../../images/image.png';

export function createThirdBanner() {
    return `
      <section class="third-banner">
        <img src=${AvantiBanner} alt="banner avanti"></img>
        <div>
          Entre em contato conosco e verifique a disponibilidade para sua região!
        </div>
      </section>
    `;
  }