// Importando express nas rotas
const express = require('express');
// Importando o controller DevController
const DevController = require('./controllers/DevController')

// Declarar rota do express
const routes = express.Router();

// Rotas do controller






//Rota POST
routes.post('/devs', DevController.store);
    


// Fazer routes ser vista por outros arquivos para import utilizando module.exports
module.exports = routes;
