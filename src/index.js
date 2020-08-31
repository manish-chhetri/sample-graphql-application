const { ApolloServer } = require('apollo-server')
const resolvers = require(__dirname + '/resolvers')
const typeDefs = require(__dirname + '/typedefs')

async function startServer() {
    const server = new ApolloServer({ typeDefs, resolvers });
    return await server.listen(process.env.GRAPHQL_PORT || 8080);
    //console.log(server);
}

startServer().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});

