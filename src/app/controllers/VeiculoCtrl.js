const Veiculo = require('../models/Veiculo')
const { v4: uuidv4 } = require('uuid');

const file = 'veiculos.json'
const pattern = 'utf8'
const msgSuccess = 'Arquivo salvo com sucesso!'
var fs = require('fs')
var table = []

class VeiculoCtrl {

    async index(req, res) {
        fs.readFile(file, pattern, function readFileCallback(err, data) {
            if (err) {
                console.log(err)
            } else if (data && table.length == 0) {
                table = JSON.parse(data)
            }
            return res.json(table)
        })
    }

    async store(req, res) {
        fs.readFile(file, pattern, function readFileCallback(err, data) {
            if (err) {
                console.log(err)
            } else {

                if (data)
                    table = JSON.parse(data)

                const { placa, chassi, renavam, modelo, marca, ano } = req.body
                var veiculo = new Veiculo(uuidv4(), placa, chassi, renavam, modelo, marca, ano)
                table.push(veiculo)
                fs.writeFile(file, JSON.stringify(table), pattern, function() {
                    console.log(msgSuccess)
                })

                return res.json(table)
            }
        })
    }

    async update(req, res) {


        fs.readFile(file, pattern, function readFileCallback(err, data) {
            if (err) {
                console.log(err)
            } else if (data) {
                table = JSON.parse(data)
                const { id, placa, chassi, renavam, modelo, marca, ano } = req.body
                table.filter(function(a) {
                    if (a.id == id) {
                        a.placa = placa
                        a.chassi = chassi
                        a.renavam = renavam
                        a.modelo = modelo
                        a.marca = marca
                        a.ano = ano
                    }
                })

                fs.writeFile(file, JSON.stringify(table), pattern, function() {
                    console.log(msgSuccess)
                })
                return res.json(table)
            }
        })
    }

    async delete(req, res) {
        fs.readFile(file, pattern, function readFileCallback(err, data) {
            if (err) {
                console.log(err)
            } else if (data) {
                table = JSON.parse(data)
                const { id } = req.body
                table = table.filter(function(a) { return a.id != id });
                fs.writeFile(file, JSON.stringify(table), pattern, function() {
                    console.log(msgSuccess)
                })
                return res.json(table)
            }
        })

    }
}

module.exports = new VeiculoCtrl();