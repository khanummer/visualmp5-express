import { resolvers } from './resolvers';
import { ApolloServer } from 'apollo-server-express';
const typeDefs = `

  type User {
    id: ID
    username: String
    email: String
    password: String
    profilePic: String
  }



  type Query {
    getOneUser(id: ID!): User
    getUsers: [User]
  }


  input UserInput {
    id: ID
    username: String
    email: String
    password: String
    profilePic: String
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(input: UserInput): User
    deleteUser(id: ID!): String
  }
`;

const GraphqlServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    setting: {
      'editor.theme': 'light'
    }
  }
});

export default GraphqlServer;
