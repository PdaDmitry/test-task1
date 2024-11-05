import { createCustomer } from './js/api.js';
import { CustomServer } from './js/pixabay-api.js';
import { renderCustomer } from './js/render-functions.js';

const nameCustom = new CustomServer();
// console.log(nameCustom);

const body = document.querySelector('body');

const sidebarList = document.querySelector('.sidebar-list');
const sidebarButtons = document.querySelectorAll('.sidebar-btn');
const contents = document.querySelectorAll('.content');
// console.log(sidebarButtons);

const customersList = document.querySelector('.custom-list');
// const customerHtml = renderCustomer(objCustomer);
const customBtn = document.querySelector('.custom-btn');
// console.log(customerHtml);

let page;
let maxPages;
let q;

sidebarButtons.forEach(sidebarButton => {
  sidebarButton.addEventListener('click', () => {
    const targetContent = sidebarButton.getAttribute('data-content');
    // console.log(targetContent);

    contents.forEach(content => content.classList.remove('active'));

    document.getElementById(targetContent).classList.add('active');
  });
});

customBtn.addEventListener('click', addCustomers);

async function addCustomers() {
  // e.preventDefault();
  customersList.innerHTML = '';

  page += 1;
  try {
    const data = await nameCustom.getCustomName(q, page);
    // maxPages = Math.ceil(data.totalHits / images.pageSize);
    console.log(data);
    const customerHtml = renderCustomer(data.hits, createCustomer);
    customersList.insertAdjacentHTML('beforeend', customerHtml);
  } catch (error) {
    console.log(error);
  }
}
