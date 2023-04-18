const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID! 
        username: String!
        email: String!
        bookcount: String!
        savedBooks: [Book]
    }
    
    type Book {
        bookId: String!
        authors: String!
        description: String!
        title: String!  
        bookId: String!
        link: String!      
    }

    input bookInput {
        bookId: String!
        authors: String!
        description: String!
        title: String!  
        bookId: String!
        link: String!  
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): auth
        addUser(username: String!, email: String!, password: String!): auth
        saveBooks(input: bookInput): User
        removeBooks(bookId: String!): User
    }

    type Auth {
        token: [token]
        user: User
    }
`;

module.exports = typeDefs;