import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation loginUser {
        loginUser{

        }
    }
`;


export const ADD_USER = gql`
    mutation addUser {
        addUser {

        }
    }
`;


export const SAVE_BOOK = gql`
    mutation saveBook {
        saveBook {

        }
    }
`;


export const REMOVE_BOOK = gql`
    mutation removeBook {
        removeBook {

        }
    }
`;
