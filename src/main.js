// import { name, lastName, company, country } from './js/pixabay-api.js';
import { objCustomer } from './js/api.js';
import { renderCustomer } from './js/render-functions.js';

const body = document.querySelector('body');

const sidebarList = document.querySelector('.sidebar-list');
const sidebarButtons = document.querySelectorAll('.sidebar-btn');
const contents = document.querySelectorAll('.content');
// console.log(sidebarButtons);

const customersList = document.querySelector('.custom-list');
const customerHtml = renderCustomer(objCustomer);
console.log(customerHtml);

sidebarButtons.forEach(sidebarButton => {
  sidebarButton.addEventListener('click', () => {
    const targetContent = sidebarButton.getAttribute('data-content');
    // console.log(targetContent);

    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(targetContent).classList.add('active');
  });
});

customersList.insertAdjacentHTML('beforeend', customerHtml);
