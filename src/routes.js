const express = require('express');
const DevController = require('./controllers/DevController')

const routes = express.Router();

// Rotas do controller






//Rota POST
routes.post('/devs', DevController.store);
    



module.exports = routes;
