import AvantiLogo from "../../images/Grupo 21089.svg";
import CupImage from "../../images/fddcc3c04ff1d6642924d03885fdbea3.png";

export function createHeader() {
  document.addEventListener("DOMContentLoaded", () => {
    const barItems = document.querySelectorAll(".bar-item");
    const departmentToggle = document.getElementById("department-toggle");
    const departmentMenu = document.getElementById("department-menu");
    const categoryMenu = document.getElementById("category-menu");
    departmentToggle.addEventListener("click", () => {
      departmentMenu.classList.toggle("hidden");
      departmentToggle.classList.toggle("turn-blue");
      categoryMenu.classList.add("hidden");
      barItems.forEach((barItem) => barItem.classList.remove("turn-blue"));
    });

    barItems.forEach((item) => {
      item.addEventListener("click", () => {
        const isActive = item.classList.contains("turn-blue");
        barItems.forEach((barItem) => barItem.classList.remove("turn-blue"));
        departmentMenu.classList.add("hidden");
        departmentToggle.classList.remove("turn-blue");

        if (isActive) {
          item.classList.remove("turn-blue");
          categoryMenu.classList.add("hidden");
        } else {
          item.classList.add("turn-blue");
          categoryMenu.classList.remove("hidden");
        }
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const departmentMenu = document.getElementById("department-menu");

    departmentMenu.addEventListener("click", (event) => {
      const clickedItem = event.target.closest(".department-item");
      if (clickedItem) {
        const departmentItems =
          departmentMenu.querySelectorAll(".department-item");
        departmentItems.forEach((item) => item.classList.remove("selected"));
        clickedItem.classList.add("selected");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("search-button");
    const searchInput = document.getElementById("search-input");

    searchButton.addEventListener("click", () => {
      const searchValue = searchInput.value.trim();
      if (searchValue) {
        searchInput.value = `Você buscou por: '${searchValue}'`;
      }
    });
  });

  const barDepartments = Array(8)
    .fill(
      `
        <li class="bar-item">Departamentos</li>
      `
    )
    .join("");
  const departmentsMenu = Array(10)
    .fill(
      `
        <li class="department-item"><p>Departamentos</p> <i class="material-icons-outlined">arrow_forward_ios</i></li>
      `
    )
    .join("");

  const categoriesList = Array(8)
    .fill(
      `
        <li>Categoria</li>
      `
    )
    .join("");

  return `
      <div class="top-bar">
        <p>Ganhe <span>R$10,00</span> de desconto no seu primeiro pedido. Utilize o cupom <i>DESCONTO123</i></p>
      </div>
      <div class="header-main">
        <i class="material-icons-outlined">menu</i>
        <h1><img src="${AvantiLogo}" alt="Logo Avanti" /></h1>
        <div class="search-bar">
          <input id="search-input" type="text" placeholder="Digite aqui o que você procura">
          <i id="search-button" class="material-icons-outlined">search</i>
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
        <li id="department-toggle">
          <i class="material-icons-outlined">menu</i>
          Todas as Categorias
        </li>
        ${barDepartments}
      </ul>
      <div id="department-menu" class="department-menu hidden">
        <ul class="department-column">
          ${departmentsMenu}
        </ul>
        <div class="category-list-container">
          <ul class="categories-list">
            ${categoriesList}
          </ul>
          <ul class="categories-list">
            ${categoriesList}
          </ul>
          <ul class="categories-list">
            ${categoriesList}
          </ul>
        </div>
        <div class="menu-banner">
          <img src="${CupImage}" alt="Caneca Avanti" />
          <div>
            <p>Confira os 
              </br>Produtos
              <b>
                </br>Que acabaram
                </br>De chegar
              </b>
            </p>
            <button>
              Ver Todos
            </button>
          </div>
        </div>
      </div>
      <div id="category-menu" class="department-menu hidden">
        <div class="category-menu-content">
          <h3>Departamento</h3>
          <div class="category-list-container">
            <ul class="categories-list">
              ${categoriesList}
            </ul>
            <ul class="categories-list">
              ${categoriesList}
            </ul>
            <ul class="categories-list">
              ${categoriesList}
            </ul>
          </div>
        </div>
        <div class="menu-banner">
          <img src="${CupImage}" alt="Caneca Avanti" />
          <div>
            <p>Confira os 
              </br>Produtos
              <b>
                </br>Que acabaram
                </br>De chegar
              </b>
            </p>
            <button>
              Ver Todos
            </button>
          </div>
        </div>
      </div>
    `;
}
