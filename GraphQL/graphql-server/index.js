const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        name: String
        age: Int
    }

#    type Course {
#        title: String
#        courseId: Int
#   }

    type Query {
        user: [User]
        #   course: [Course]
    }
`;

const users = [
    {
        name: "Mohib Ismail",
        age: 19
    },
    {
        name: "Faizan Sarfaraz",
        age: 18
    }
]

// const courses = [
//     {
//         title: "Smarter Way to Learn Python",
//         courseId: 73456
//     },
//     {
//         title: "Smarter Way to Learn JavaScript",
//         courseId: 85769
//     }
// ]

const resolvers = {
    Query: {
        user: () => users,
        // course: () => courses
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen()
    .then(({ url }) => console.log(`🚀 Server ready at ${url}`))