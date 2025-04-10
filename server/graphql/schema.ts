import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    findTodos: [Todo]!
    findTodoById(id: ID!): Todo!
  }

  type Mutation {
    createTodo(input: CreateTodoInput): Todo
  }

  type Todo {
    id: ID!
    designation: String!
    isCompleted: Boolean!
  }

  input CreateTodoInput {
    designation: String!
  }
`);

export { schema };
