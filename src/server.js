const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://luminuszz:7418529630@serverbank-ec2rj.mongodb.net/server_api?retryWrites=true&w=majority', 
{useNewUrlParser: true});
server.use(express.json());
server.use(routes);

server.listen(3333);

