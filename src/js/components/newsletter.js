export function createNewsletter() {
    return `
      <section class="newsletter">
        <h2>Cadastre-se na nossa <span>newsletter</span></h2>
        <form>
          <input type="text" placeholder="Digite seu nome" />
          <input type="email" placeholder="Digite seu e-mail" />
          <label for="politica">
            <input type="checkbox" id="politica" name="politica">
            Estou de acordo com a <u>Política de Privacidade</u>
          </label>
          <button type="submit">Cadastrar</button>
        </form>
      </section>
    `;
  }