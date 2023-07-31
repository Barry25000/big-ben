// seed.js

const mongoose = require('mongoose');
const Item = require('./models/Item');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/watch_db';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Seed data
    const items = [
      {
        title: 'Item 1',
        description: 'Description of Item 1',
        category: 'Category A',
        price: 19.99,
        date_added: new Date('2023-07-28')
      },
      {
        title: 'Item 2',
        description: 'Description of Item 2',
        category: 'Category B',
        price: 24.99,
        date_added: new Date('2023-07-28')
      },
      {
        title: 'Item 3',
        description: 'Description of Item 3',
        category: 'Category A',
        price: 14.99,
        date_added: new Date('2023-07-28')
      },
      {
        title: 'Item 4',
        description: 'Description of Item 4',
        category: 'Category C',
        price: 34.99,
        date_added: new Date('2023-07-28')
      }
    ];

    // Insert seed data into the database
    Item.insertMany(items)
      .then(() => {
        console.log('Seed data inserted successfully');
        // Close the connection to the database after seeding
        mongoose.connection.close();
      })
      .catch((err) => {
        console.error('Error seeding data:', err);
        // Close the connection to the database if an error occurs during seeding
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

