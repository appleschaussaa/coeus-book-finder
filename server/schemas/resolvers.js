const { User, Book } = require('../models');
// const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (content.User) {
                return User.findOne({ _id: context.user._id }).select('-_v -password');
        }
            throw new AuthenticationError('You need to be logged in to view!');
        },
    },
    Mutations: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
        },
        
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Could not find a user with this email!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect cridentials!');
            }

            const token = signToken(user);
            return { token, user };
        },

        saveBook: async (parent, { bookInput }, context) => {
            if (context.user) {
                const updateBook = User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedBooks: bookInput } },
                    { new: true }
                )
                return updateBook;
            }
            throw new AuthenticationError('Sign in first!');
        },

        removeBook: async (parent, { bookId }, content) => {
            if (context.user) {
                const updateBook = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: {savedBooks: { bookId: bookId }}},
                    { new: true }
                )
                return updateBook;
            }
            throw new AuthenticationError('Sign in first!');
        }
    }
}