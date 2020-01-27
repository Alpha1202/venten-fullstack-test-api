module.exports = {
  up: queryInterface =>
  queryInterface.bulkInsert(
  'Categories',
  [
  {
  name: 'Computers',
  },
  {
  name: 'Home Utilities',
  },
  {
  name: 'Sports',
  },
  {
  name: 'Phones and Accessories',
  },
  {
  name: 'Electronics',
  },
  {
  name: 'Clothing and Fashion',
  },
  {
  name: 'Others',
  },
  ],
  {},
  ),
  down: queryInterface => queryInterface.bulkDelete('Categories', null, {}),
  };