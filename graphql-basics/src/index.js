import { GraphQLServer } from 'graphql-yoga'
import dataContext from './db';
import { Comment, Post, Query, User, Mutation } from './resolvers';

// Scalar types - String, Boolean, Int, Float, ID

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Comment,
        Post,
        Query,
        User,
        Mutation
    },
    context: {
        db: dataContext
    }
})

server.start(() => {
    console.log('The server is up!')
})