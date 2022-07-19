const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Rick and morty API project 04 module 03',
    description: 'Projeto desenvolvido em nodeJS e express em padrão MVC, o projeto possui CRUD de personagens e rotas de usuarios com autentiucação em JWT',
  },
  host: 'http://localhost:3300',
  schemes: ['mongodb+srv://admin:admin@character.kzprk.mongodb.net/?retryWrites=true&w=majority'],
};

const outputFile = './src/swagger/swagger.json';
const endpointsFiles = ['./index.js'];



swaggerAutogen(outputFile, endpointsFiles, doc);