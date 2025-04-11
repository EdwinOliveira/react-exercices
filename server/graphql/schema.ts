import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    findProducts: [Product]!
    findProductById(input: FindProductByIdInput!): Product
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product
  }

  type Product {
    id: ID!
    designation: String!
    price: Int!
  }

  input FindProductByIdInput {
    id: ID!
  }

  input CreateProductInput {
    designation: String!
    price: Int!
  }
`);

export { schema };
