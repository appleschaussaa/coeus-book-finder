const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID! 
        username: String!
        email: String!
        bookcount: String!
        savedBooks: [bookSchema]
    }
    
    type Book {
        bookId: String!
        authors: String!
        description: String!
        title: String!  
        bookId: String!
        link: String!      
    }

    type Query {
        me: [User]
    }

    type Mutation {
        login(email: String!, password: String!): auth
        addUser(username: String!, password: String!): auth
        saveBooks(authors: [authors], description: String!, title: String!, bookId: String!, link: String!, link: String!):
        removeBooks(bookId: String!): User
    }

    type Auth {
        token: [token]
        user: user
    }
`;

module.exports = typeDefs;