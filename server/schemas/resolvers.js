const { AuthenticationError } = require('apollo-server-express');
const { User, Order, Product, Category } = require('../models');
const { signToken } = require('../utils/auth');
const { CouponJS } = require('couponjs');
// const stripe = require


// if the coupon 

// const stripe = require(stripe);
//TODO: Insert stipe here 

const resolvers = {
    Query: {
    categories: async () => {
        return await Category.find();
    },
        // get all product
    products: async (parent, { category, name }) => {
        const params = {};

        if (category) {
            params.category = category;
        }

        if (name) {
            params.name = {
                $regex: name

            }
        
            return await Product.find(params).populate('category');
        }
    },
                        // get a product by _id
    product: async (parent, { _id }) => {
        return await Product.findById(_id).populate('category');
    },
    order: async (parent, _id, context) => {
        if (context.user) {
            const user = await User.findById(context.user._id).populate({
                path: 'orders.products',
                populate: 'category'
            });
            return user.orders.id(_id);

        }
        throw new AuthenticationError('Not logged in');
    },
    // checkout: async (parent, args, context) => {

    //     const url = new URL(context.headers.referer).origin;
    //     const order = new Order({ products: args.products });
    //     const line_items = [];
    //     const { products } = await order.populate('products').execPopulate();

    //     for (let i = 0; i < products.length; i++) {
    //         const product = await stripe.products.create({
    //             name: products[i].name,
    //             description: products[i].description,
    //             images: [`${url}/images/${products[i].image}`]
    //         });

    //         const price = await stripe.prices.create({
    //             product: product.id,
    //             unit_amount: products[i].price * 100,
    //             currency: 'usd',
    //         });

    //         line_items.push({
    //             price: price.id,
    //             quantity: 1
    //         });
    //     }

    //     return { session: session.id };
    // }
        // get a user by username
            //   Mutations
     },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create({ args });
            const token = signToken(user);
            return { token, user };
        },
        addOrder: async (parent, { products }, context) => {
            constole.log(context);
            if (context.user) {
                const order = new Order({ products });

                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });

                return order; // order complete!
            }
            throw new AuthenticationError('Not logged in');
        },     
        LogIn: async (parent, { email, password }) => {
                    const user = await User.findOne({ email });

                    if (!user) {
                        throw new AuthenticationError('No user found with this email address');
                    }

                    const correctPw = await user.isCorrectPassword(password);

                    if (!correctPw) {
                        throw new AuthenticationError('Incorrect credentials');
                    }
                    console.log(user);
                    const token = signToken(user);
                
                    return { token, user };
            }
        }   
}   
module.exports = resolvers;

                            