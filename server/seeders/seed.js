const db = require('../config/connection');
const { User, Item, Cart, Order } = require('../models');
const userSeeds = require('./userSeeds.json');
const productSeeds = require('./productSeeds.json');