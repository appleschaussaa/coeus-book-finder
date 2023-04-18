import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password: String!) {
        loginUser($email: String!, $password: String!) {
            token
            user {
                _id
                username
            }
        }
    }
`;


export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser($username: String!, $email: String!, $password: String!) {
            token
            user {
                _id
                username
            }
        }
    }
`;


export const SAVE_BOOK = gql`
    mutation saveBook($input: bookInput) {
        saveBook($input: bookInput) {
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;


export const REMOVE_BOOK = gql`
    mutation removeBook($bookId: String!) {
        removeBook($bookId: String!) {
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
`;
