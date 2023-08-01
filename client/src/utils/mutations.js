import { gql } from '@apollo/client';

export const LOGIN_USER  = gql`
  mutation login($$email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser

  
  ($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;


//TODO: add these later 

module.exports = { LOGIN_USER, ADD_USER };

// Compare this snippet from client/src/components/Pages/LogIn/index.js: