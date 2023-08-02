// type Defs 
const { gql } = require('apollo-server-express');



const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        orders: [Order]
    }
    type Auth {
        token: ID!
        user: User
      }
      type Query {
        user: [User]
        user(username: String!): User
        orders(username: String): [Order]
        order(orderId: ID!): Order
        me: User
      }
      type Order {
        _id: ID!
        purchaseDate: String
        products: [Product]
      }
      type User {
        _id: ID!
        name: String
        email: String
        orders:[Order]

        type: Checkout {
          session: ID
        }
        type: Auth {
          token: ID
          user: User


        }
        type: Query {
          caterories:[Category]
          products(category: ID, name:String):[Product]
          product(_id: ID!):Product 
          user: User
          order(_id:ID!): Order
          checkout(products: [ID!]:Checkout)
        }

        type: Mutation {
            addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
            addOrder(products: [ID]!): Order
            updateUser(firstName: String, lastName: String, email: String, password: String): User
            updateProduct(_id: ID!, quantity: Int!): Product
            LogIn(email: String!, password: String!): Auth
            removeOrder(orderID: ID!): Order


  }


              

            
            `;
module.exports = typeDefs;

