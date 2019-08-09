// Importando express nas rotas
const express = require('express');
// Importando o controllers
const DevController = require('./controllers/DevController'); // Importando "DevController"
const LikeController = require('./controllers/LikeController'); // Importando "LikeController"
const DislikeController = require('./controllers/DislikeController'); // Importando "LikeController"

// Declarar rota do express
const routes = express.Router();

// Rotas do controller GET
routes.get('/devs', DevController.index); // Rota de listagem usando o metodo metodo Index do "DevController"



// Rotas do controller POST
routes.post('/devs', DevController.store); // Rota de "DevController"
routes.post('/devs/:devId/likes', LikeController.store); //Rota de "LikeController"
routes.post('/devs/:devId/dislikes', DislikeController.store); //Rota de "LikeController"
    


// Fazer routes ser vista por outros arquivos para import utilizando module.exports
module.exports = routes;
