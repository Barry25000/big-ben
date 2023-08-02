// seed.js
///
const db = require('../config/connection');
const { User,Cart, Order, Product } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');
//TODO: insert order seeds here 



db.once('open', async () => {
  try {
    // first delete the data already in there 
    await User.deleteMany({});
    await Product.deleteMany({});
    await Cart.deleteMany({});
    await Order.deleteMany({});


    // then create the new data
    await User.create(userSeeds);
    console.log('users seeded');
    console.table(userSeeds);

    // loop through the data 

    await Product.create(productSeeds);


    // log the results
  
    console.table('items seeded');
    console.table(productSeeds);

  } catch (err) {
    console.error(err);
    process.exit(1);// exit with failure
  }

  console.log('Success...all done!');
  process.exit(0);// exit with success
});

