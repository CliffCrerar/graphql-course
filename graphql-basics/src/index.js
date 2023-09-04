import {GraphQLServer} from 'graphql-yoga';


// Type definitions (Schema)

const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }
`

// Resolvers

const resolvers = {
    Query: {
        title() {
            return 'iPhone'
        },
        price() {
            return 2
        },
        releaseYear() {
            return 2002
        },
        rating() {
            return null
        },
        inStock() {
            return false
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