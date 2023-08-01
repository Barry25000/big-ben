const { AuthenticationError } = require('apollo-server-express');
// TODO:  add Product and Category 
const { User, Order } = require('../models');
const { signToken } = require('../utils/auth');
//TODO: Insert stipe here 

// const resolvers = {
const resolvers = {
    Query: {
        
    //         // TODO: Insert checkout here



  
    //     },
    //     // get a user by username
        user: async () => {
        return await User.find();
        },

        },
        // get a user by _id








        // Mutations

     Mutation: {
            addUser: async (parent,args ) => {
                const user = await User.create({ args });
                const token = signToken(user);
                return { token, user };
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

                return { token, user }
            }
        }
    }
    module.exports = resolvers;
