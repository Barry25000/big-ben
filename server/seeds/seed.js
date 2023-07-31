// seed.js
///
const db = require('../config/connection');
const { User, Item, Cart, Order } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');



db.once('open', async () => {
  try {
    // first delete the data already in there 
    // await User.deleteMany({});
    // await Item.deleteMany({});
    // await Cart.deleteMany({});
    // await Order.deleteMany({});


    // then create the new data
    await User.create(userSeeds);
    console.log(userSeeds);

    // loop through the data 



    // await Item.create(productSeeds);


    // log the results
    console.table('users seeded');
    console.table('items seeded');
    console.log('all done!');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
