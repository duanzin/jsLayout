import { createHeader } from './components/header.js';
import { createSale } from './components/sale.js';
import { createLancamentos } from './components/lancamentos.js';
import { createBanner } from './components/banner.js';
import { createNewsletter } from './components/newsletter.js';
import { createFooter } from './components/footer.js';

document.querySelector('#header').innerHTML = createHeader();
document.querySelector('#sale').innerHTML = createSale();
document.querySelector('#lancamentos').innerHTML = createLancamentos();
document.querySelector('#banner').innerHTML = createBanner();
document.querySelector('#newsletter').innerHTML = createNewsletter();
document.querySelector('#footer').innerHTML = createFooter();
