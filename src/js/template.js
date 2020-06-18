import itemTemplate from '../templstes/menu-item.hbs';
import menu from '../menu.json';

const ulMenuRef = document.querySelector('.js-menu');

const marckup = itemTemplate(menu);
ulMenuRef.insertAdjacentHTML("beforeend", marckup);