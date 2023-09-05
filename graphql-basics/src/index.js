import {GraphQLServer} from 'graphql-yoga';


// Type definitions (Schema)

const typeDefs = `
    type Query {
        greeting(name: String): String!
        me:User!
        add(numbers: [Float!]!): Float!
        grades: [Int!]!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }
`

// Resolvers

const resolvers = {
    Query: {
        grades(parent, args, ctx, info) {
            return [99,80,90]
        },
        add(parent, args ,ctx, info) {
            if(args.numbers.length === 0) {
                return 0
            }

            return args.numbers.reduce((acc, currVal) => {
                return acc + currVal;
            })
        },
        me() {
            return {
                id: 1,
                name: "Cliff",
                email: "cliff.crerar@gmail.com"
            }
        },
        greeting(parent, args, ctx, info) {

            console.log("parent:",parent)
            console.log("args:",args)
            console.log("ctx:",ctx)
            console.log("info:",info)

            if(args.name) {
                return `Hello ${args.name}`
            }

            return 'Hello!'
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