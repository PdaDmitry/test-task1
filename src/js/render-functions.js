export function renderCustomer(customers, customerHtml) {
  // const obj = customerHtml;

  const item = customers
    .map(el => {
      const { id, user } = el;
      const { lastName, company, email, country, status } = customerHtml();
      return `
          <li>
            <p>${id} ${user[0].toUpperCase()}${user.slice(1)} ${lastName}</p>
            <p> ${company}</p>
            <p>${user.toLowerCase()}${email}</p>
            <p> ${country}</p>
            <p> ${status}</p>
          </li>
      `;
    })
    .join('');

  return item;
}
