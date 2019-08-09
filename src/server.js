// Importanto blibiotecas para o sever.js

// Express para trabalhar com o sevidor
const express = require('express');

// Mongoose para fazer a conexão com o banco e tambem fazer a sintaxe js ser entendida para a lingaugem do banco no caso mongodb
const mongoose = require('mongoose');
// Importando cors para a API ser acessada remotamente paro o REACT
const cors = require('cors');


// Routes do express para trabalhar com rotas
const routes = require('./routes');



// Conexão com banco utilizando mongoose 
const server = express();
mongoose.connect('mongodb+srv://luminuszz:7418529630@serverbank-ec2rj.mongodb.net/server_api?retryWrites=true&w=majority', 
{useNewUrlParser: true}); // obejto de configuração do moongose para admitir a nova sintaxe
server.use(cors());
server.use(express.json()); // Fazer o express entender o arquivo do tipo JSON
server.use(routes); // Fazer o servidor entender as rotas

server.listen(3333); // A porta q será utilizada

