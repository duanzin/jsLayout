import AvantiLogo from '../../images/Grupo 21089.svg';

export function createHeader() {
  return `
      <div class="top-bar">
        <p>Cash: <span>R$10,00</span> de desconto no seu primeiro pedido. Utilize o cupom <i>DESCONTO123</i></p>
      </div>
      <div class="header-main">
        <h1><img src="${AvantiLogo}" alt="Logo Avanti" /></h1>
        <div class="search-bar">
          <input type="text" placeholder="Digite aqui o que você procura">
          <i class="material-icons-outlined">search</i>
        </div>
        <div class="user-actions">
          <i class="material-icons-outlined">
            person
          </i>
          <p>Olá,</br>Nome cliente!</p>
          <i class="material-icons-outlined">
            shopping_cart
          </i>
          <span>2</span>
        </div>
      </div>
      <ul class="ul-bar">
        <li>
          <i class="material-icons-outlined">menu</i>
          Todas as Categorias
        </li>
        <li>Departamentos</li>
        <li>Departamentos</li>
        <li>Departamentos</li>
        <li>Departamentos</li>
        <li>Departamentos</li>
        <li>Departamentos</li>
        <li>Departamentos</li>
        <li>Departamentos</li>
      </ul>
    `;
}
