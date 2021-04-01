const { ApolloServer, gql } = require('apollo-server');
const crypto = require('crypto');

const typeDefs = gql`
    type messageType {
        message: String
    }

    input messageInput {
        message: String
    }

    type Query {
        getMessage: String
    }

    type Mutation {
        createMessage(input: messageInput) : messageType
    }
`;

let localData = {};

const resolvers = {
    Query: {
        getMessage: () => {
            return 'Hello World'
        }
    },

    Mutation: {
        createMessage: (_, { input }) => {
            let id = crypto.randomBytes(10).toString('hex');
            localData[id] = { id, ...input.message }
            return { id, ...input }
        }
    }
}

let server = new ApolloServer({ typeDefs, resolvers })

server.listen()
    .then(({ url }) => console.log(`🚀 Server ready at ${url}`))