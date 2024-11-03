const names = [
  'Leanne',
  'Ervin',
  'Clementine',
  'Patricia',
  'Chelsey',
  'Dennis',
  'Kurtis',
  'Nicholas',
  'Glenna',
  'Clementina',
];

const lastNames = [
  'Graham',
  'Howell',
  'Bauch',
  'Lebsack',
  'Dietrich',
  'Schulist',
  'Weissnat',
  'Runolfsdottir',
  'Reichert',
  'DuBuque',
];

const companies = [
  'Feacebook',
  'Yahoo',
  'Microsoft',
  'Google',
  'Tesla',
  'Adobe',
  'Foxtrot',
  'COMFY',
  'ROZETKA',
  'Adidas',
];

const countries = [
  'Ukraine',
  'United States',
  'Israel',
  'France',
  'Germany',
  'Türkiye',
  'Spain',
  'Greece',
  'Denmark',
  'Norway',
];

const statuses = ['Active', 'Inactive'];

const randomElem = arr => {
  const randomIndex = Math.floor(Math.random() * companies.length);
  const statusesIndex = Math.floor(Math.random() * statuses.length);

  if (arr === statuses) return arr[statusesIndex];
  return arr[randomIndex];
};

const createCustomer = () => {
  let name = randomElem(names);
  let lastName = randomElem(lastNames);
  let company = randomElem(companies);
  let country = randomElem(countries);
  let email = `${name.toLowerCase()}@${company.toLowerCase()}.com`;
  let status = randomElem(statuses);

  return {
    id: Date.now(),
    name,
    lastName,
    company,
    email,
    country,
    status,
  };
};

export const objCustomer = createCustomer();
// ===============================================================
