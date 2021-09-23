const { gql , ApolloServer } = require( "apollo-server" );

/**
 * Scalar Types
 * - Int
 * - Float
 * - String
 * - Boolean
 * - ID
 */

 const typeDefs = gql`
 type Query {
     idade : Int
     salario: Float
     nome: String
     ativo: Boolean
     id: ID
     tecnologias: [String!]!
 }
`;

const resolvers = {
    Query: {
        idade() {
            return 18;
        },
        salario() {
            return 1234.56;
        },
        nome() {
            return 'Graph QL';
        },
        ativo() {
            return true;
        },
        id() {
            return 123456789;
        },
        tecnologias() {
            return ['GraphQL','ReactJS','CSS',null];
        }
    }
};

const server = new ApolloServer( {
    typeDefs,
    resolvers
} );

server.listen();