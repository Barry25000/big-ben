import { gql } from '@apollo/client';

//TODO: Finish this tomorrow 
export const QUERY_USER = gql`
    query user($username: String!) {
        _id
        username
        email
        orders {
            _id
        

        }
    }
`;

