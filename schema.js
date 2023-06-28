const { gql } = require("apollo-server");

exports.typeDefs = gql`
    type Query{
        courses: [Course!]!
        course(id: ID!): Course
        genres: [Genre!]!
        genre(id: ID!): Genre
        numOfCourses: Int
        price: Float
        isTrainer: Boolean
    }

    type Course {
        name: String!
        description: String!
        price: Float!
        discount: Boolean!
        genre: Genre
    }

    type Genre {
        id: ID!
        name: String!
        courses: [Course!]!
    }
`
