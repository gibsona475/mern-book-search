const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email:String
    bookCount: Int 
    savedBooks: [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image:String
    link:String
  }
  
  type Auth {
      token: ID!
      user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    # addProfile(name: String!): Profile
    # addSkill(profileId: ID!, skill: String!): Profile
    # removeProfile(profileId: ID!): Profile
    # removeSkill(profileId: ID!, skill: String!): Profile
  }
`;

module.exports = typeDefs;
