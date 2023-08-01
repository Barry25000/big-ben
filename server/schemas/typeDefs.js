const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        # orders: [Order]
    }
    type Auth {
        token: ID!
        user: User
      }
      type Query {
        user: [User]
      #   user(username: String!): User
      #   # orders(username: String): [Order]
      #   # order(orderId: ID!): Order
      #   me: User
      }

            type Mutation {
                addUser(username: String!, email: String!, password: String!): Auth
                LogIn(email: String!, password: String!): Auth
                # addOrder(orderText: String!): Order
                # removeOrder(orderId: ID!): Order
              

            }
            `;
module.exports = typeDefs;

