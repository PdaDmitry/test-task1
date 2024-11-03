export function renderCustomer(user) {
  console.log('user: ', user);
  const { name, lastName, company, email, country, status } = user;
  return `
          <li>
            <p><b>Name</b>: ${name} ${lastName}</p>
            <p> ${company}</p>
            <p> ${email}</p>
            <p> ${country}</p>
            <p> ${status}</p>
          </li>
      `;
  // userList.insertAdjacentHTML('beforeend', markup);
}
