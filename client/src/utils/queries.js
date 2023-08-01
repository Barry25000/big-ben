import { gql } from '@apollo/client';

// get all users 
export const QUERY_USER = gql`
    {
        user {
            name
            username
            email
            _id
            
        }
    }
`;


//TODO:  add query for orders
// get all orders

