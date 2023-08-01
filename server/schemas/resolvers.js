const { AuthenticationError } = require('apollo-server-express');
// TODO:  add Product and Category 
const { User, Order } = require('../models');
const { signToken } = require('../utils/auth');
//TODO: Insert stipe here 

// const resolvers = {
const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('orders') //TODO: change this to find all users

        },
        orders: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Order.find(params).sort({ createdAt: -1 });
        },
            me: async (parent, args, context) => {
                if (context.user) {
                    return User.findOne({ _id: context.user._id }).populate(orders);
                }
                throw new AuthenticationError('You need to be logged in!');
            },
            },

            // TODO: Insert checkout here

        // Mutations

        Mutation: {
            addUser: async (parent, { username, email, password }) => {
                const user = await User.create({ username, email, password });
                const token = signToken(user);
                return { token, user };
            },
            login: async (parent, { email, password }) => {
                const user = await User.findOne({ email });

                if (!user) {
                    throw new AuthenticationError('No user found with this email address');
                }

                const correctPw = await user.isCorrectPassword(password);

                if (!correctPw) {
                    throw new AuthenticationError('Incorrect credentials');
                }

                const token = signToken(user);

                return { token, user }
            }
        }
    }
    module.exports = resolvers;