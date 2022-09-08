// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  
  type Business {
    authors: [String]
    description: String
    businessId: String!
    image: String
    link: String
    title: String!
  }
  # declaring type User with it values
  type User {
    _id: ID
    firstName: String
    lastName: String
    affiliation: String
    username: String!
    email: String!
    phone: String
    starsGiven: String
    starsAssoc: String
    ethnicity: String
    orientation: String
    gender: String
    createdAt: String
    address: String
    city: String
    zip: String
  }
  # declaring type Auth with it values
  type Auth {
    token: ID!
    user: User
  }
  
  input SavedBusinessInput {
    authors: [String]
    title: String
    description: String
    businessId: String
    image: String
    link: String
  }
  # declaring me to the user
  type Query {
    me: User
  }
  
  # declaring the mutation types
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBusiness(input: SavedBusinessInput): User
    removeBusiness(businessId: String!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;