// seed.js
const db = require('../config/connection');
const {Product} = require('../models');
    // Seed data
    const product = [
      {
        title: 'Product 1',
        description: 'Description of Product 1',
        category: 'Category A',
        price: 19.99,
        date_added: new Date('2023-07-28')
      },
      {
        title: 'Product 2',
        description: 'Description of Product 2',
        category: 'Category B',
        price: 24.99,
        date_added: new Date('2023-07-28')
      },
      {
        title: 'Product 3',
        description: 'Description of Product 3',
        category: 'Category A',
        price: 14.99,
        date_added: new Date('2023-07-28')
      },
      {
        title: 'Product 4',
        description: 'Description of Product 4',
        category: 'Category C',
        price: 34.99,
        date_added: new Date('2023-07-28')
      }
    ];





  db.once('open', async () => {
    await Product.deleteMany();
    await Product.create(product);

    console.log('all done!');
    process.exit(0);
  });
