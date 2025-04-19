import AvantiLogo from '../../images/Grupo 21089.svg';
import Boleto from '../../images/icon-boleto___ffe2ba684569d29f8e546b10457c48f8.svg';
import Pix from '../../images/União 39.svg';
import Paypal from '../../images/União 38.svg';
import PaymentMethod from '../../images/c.svg';
import Elo from '../../images/elo.svg';
import Hipercard from '../../images/Caminho 19362.svg';
import Visa from '../../images/visa.svg';
import Mastercard from '../../images/União 32.svg';
import Amex from '../../images/União 34.svg';
import Encrypt from '../../images/Group.svg';
import Vtex from '../../images/vtex-pci-200.png';
import Vtex2 from '../../images/vtex-logo.svg';

export function createFooter() {
    return `
      <footer>
        <div class="footer-info">
          <ul>
            <li>
              <img src="${AvantiLogo}" alt="Logo Avanti" />
              <div>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-tiktok"></i>
              </div>
            </li>
            <li class="desktop-info">
              <h4>Institucional</h4>
              <h5>Sobre Nós</h5>
              <h5>Nossas Lojas</h5>
              <h5>Privacidade e Segurança</h5>
              <h5>Termos e Condições</h5>
            </li>
            <li class="desktop-info">
              <h4>Central de Ajuda</h4>
              <h5>Fale Conosco</h5>
              <h5>Frete e Entrega</h5>
              <h5>Trocas e Devoluções</h5>
              <h5>Formas de Pagamento</h5>
              <h5>FAQ</h5>
            </li>
            <li class="desktop-info">
              <h4>Atendimento</h4>
              <h5><b>Telefone: </b> (00) 1234-5678</h5>
              <h5><b>E-mail: </b> exemplo@exemplo.com.br</h5>
              <h5>
                <b>Horário de Atendimento: </b>
                <p>Segunda a Sábado: 07h00 às 23h00
                </br>Domingos e Feriados: 07h00 às 21h00
                </p>
              </h5>
            </li>
            <li class="mobile-info">
              <h4>Institucional</h4>
              <i class="material-icons-outlined">keyboard_arrow_down</i>
            </li><li class="mobile-info">
              <h4>Central de Ajuda</h4>
              <i class="material-icons-outlined">keyboard_arrow_down</i>
            </li><li class="mobile-info">
              <h4>Atendimento</h4>
              <i class="material-icons-outlined">keyboard_arrow_down</i>
            </li>
          </ul>
          <div class = "footer-info-logos">
            <img src="${Amex}" alt="Amex" />
            <img src="${Mastercard}" alt="Mastercard" />
            <img src="${Visa}" alt="Visa" />
            <img src="${Hipercard}" alt="Hipercard" />
            <img src="${Elo}" alt="Elo" />
            <img src="${PaymentMethod}" alt="Payment Method" />
            <img src="${Paypal}" alt="Paypal" />
            <img src="${Pix}" alt="Pix" />
            <img src="${Boleto}" alt="Boleto" />
          </div>
        </div>
        <div class="bottom-text">
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
           sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
           Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
           Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, 
           vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim
           qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>
          <div>
            <img src="${Encrypt}" alt="Encrypt" />
            <img src="${Vtex}" alt="Vtex" />
            <img src="${AvantiLogo}" alt="Avanti Logo" />
            <img src="${Vtex2}" alt="Vtex logo" />
          </div>
        </div>
      </footer>
    `;
  }