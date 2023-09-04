import {GraphQLServer} from 'graphql-yoga';

// Type definitions (Schema)

const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }
`

// Resolvers

const resolvers = {
    Query: {
        hello() {
            return 'This is my first query';
        },
        name() {
            return 'Cliff'
        },
        location() {
            return 'Cape Town'
        },
        bio() {
            return 'I live in Cape town and develope for JobJack'
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(()=> {
    console.log('Graph QL server is running!');
});