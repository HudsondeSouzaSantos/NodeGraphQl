const { gql , ApolloServer } = require( "apollo-server" );

/**
 * Scalar Types
 * - Int
 * - Float
 * - String
 * - Boolean
 * - ID
 */

/**
 * ==> Schema
 * --> Schema Definition Language ou LInguage de Definição de Esquema
 * --> SDL
 */

 const typeDefs = gql`

type Usuario {
    idade : Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
}

 type Query {
     usuario: Usuario
 }
`;

const resolvers = {
    Query: {
        usuario(){
            return {
                id: 1,
                nome: "Paulo",
                salario: 10.01,
                ativo: true,
                idade: 23
            }
        }
    }
};

const server = new ApolloServer( {
    typeDefs,
    resolvers
} );

server.listen();