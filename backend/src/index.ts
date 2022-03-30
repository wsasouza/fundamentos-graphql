import 'reflect-metadata';

import path from 'path';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './resolvers/UserResolver';

async function main() {
  const schema = await buildSchema({
    resolvers: [UserResolver],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
  });

  const server = new ApolloServer({ schema });

  const { url } = await server.listen(4000);

  console.log(`Server is running, GraphQL Playground available at ${url}`);
}

main();
