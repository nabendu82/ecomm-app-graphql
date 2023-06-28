const { ApolloServer, gql } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Query } = require("./resolvers/Query");
const { Course } = require("./resolvers/Course");
const { Genre } = require("./resolvers/Genre");

const server = new ApolloServer({ typeDefs, resolvers: { Query, Course, Genre } })

server.listen().then(({ url }) => console.log(`Server is running at ${url}`));