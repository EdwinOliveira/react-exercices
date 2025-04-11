import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    findProducts: [Product]!
    findProductById(id: ID!): Product
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product
  }

  type Product {
    id: ID!
    designation: String!
    price: Int!
  }

  input CreateProductInput {
    designation: String!
    price: Int!
  }
`);

export { schema };
