const { gql, ApolloServer } = require("apollo-server");
const { ProvidedRequiredArgumentsOnDirectivesRule } = require("graphql/validation/rules/ProvidedRequiredArgumentsRule");

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

const produtos = [
    {
        id: 1,
        nome: "Notebook",
        valor: 4520.02
    },
    {
        id: 2,
        nome: "Monitor",
        valor: 420.67
    }
];

const usuarios = [
    {
        id: 1,
        nome: "Paulo",
        salario: 10.01,
        ativo: true,
        idade: 23
    },
    {
        id: 2,
        nome: "João",
        salario: 20.02,
        ativo: false,
        idade: 32
    }
];

const typeDefs = gql`

type Usuario {
    idade : Int
    salario: Float
    nome: String
    ativo: Boolean
    id: ID
}

type Produto {
    id: ID
    nome: String
    valor: Float
}

 type Query {
     usuarios: [Usuario]
     produtos: [Produto]
     usuario(id:Int, nome: String): Usuario
     produto(id:Int, nome: String, valor: Float) : Produto
 }
`;

const resolvers = {
    Query: {
        usuarios() {
            return usuarios;
        },

        produtos() {
            return produtos;
        },
        usuario(_, args) {
            const { id, nome } = args;
            if (id)
                return usuarios.find(usuario => usuario.id == id);

            return usuarios.find(usuario => usuario.nome == nome)
                ;
        },
        produto(_, args) {
            const { id, nome, valor } = args;
            if (id) {
                return produtos.find(produto => produto.id == id);
            } else {
                if (nome) {
                    return produtos.find(produto => produto.nome == nome);
                } else {
                    return produtos.find(produto => produto.valor == valor);
                }
            }
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen();