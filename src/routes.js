const express = require('express');
const VeiculoCtrl = require('./app/controllers/VeiculoCtrl');
const handle = require('express-async-handler')

const routes = express.Router();

routes.get('/veiculos', handle(VeiculoCtrl.index));
routes.post('/veiculos', handle(VeiculoCtrl.store));
routes.put('/veiculos', handle(VeiculoCtrl.update));
routes.delete('/veiculos', handle(VeiculoCtrl.delete));

module.exports = routes;