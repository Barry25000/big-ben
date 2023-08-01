import { gql } from '@apollo/client';

export const LOGIN_USER  = gql`

  mutation LogIn($email: String!, $password: String!) {
    LogIn(email: $email, password: $password) {
      token
      user {
        _id
        email
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



// Compare this snippet from client/src/components/Pages/LogIn/index.js: