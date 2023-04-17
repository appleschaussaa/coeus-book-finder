import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id: ID! 
            username: String!
            email: String!
            bookcount: String!
            savedBooks: [bookSchema]
        }
    }
`;