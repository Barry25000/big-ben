// type Defs 
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    # type: Checkout {
    #   session: ID
    # }
    type Product {
      _id: ID
      name: String
      description: String
      image: String
      quantity: Int
      price: Float
    }

    type Category {
      _id: ID
      name: String
    }

    type User {
        _id: ID
        username: String
        email: String
        password: String
        order: [Order]
    }
    type Auth {
        token: ID!
        user: User
    }
      type Order {
        _id: ID!
        purchaseDate: String
        products: [Product]
      }

    type Query {
      user: [User]
      categories: [Category]
      products(name: String): [Product]
      product(_id: ID!): Product
      order(orderId: ID!): Order
      #checkout(products: [ID]!): Checkout
    }


    type Mutation {
      addUser(name: String! email: String!, password: String!): Auth
      addOrder(products: [ID]!): Order
      LogIn(email: String!, password: String!): Auth
  }

`;
module.exports = typeDefs;

