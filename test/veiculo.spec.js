/**
 * 
 * API
 * @see http://localhost:3333
 *
 */

/**
 * Carrega as bibliotecas que vamos utilizar
 * O mocha nao eh carregado aqui, pois ele que executa este arquivo
 */
var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:3333";

describe("Teste API GET Veiculos", function() {
    it("Deve receber JSON de veiculos", function(done) {
        request.get({
                url: urlBase + "/veiculos"
            },
            function(error, response, body) {
                var _body = {}
                try {
                    _body = JSON.parse(body)
                } catch (e) {
                    _body = {}
                }
                expect(response.statusCode).to.equal(200)
                done();
            }
        )
    })
})

describe("Teste API POST Veiculo", function() {
    it("Deve receber JSON de todos veiculos", function(done) {
        request.post({
                url: urlBase + "/veiculos",
                data: {
                    "placa": "TES-001",
                    "chassi": "OPI-0237",
                    "renavam": "OPI-0237",
                    "modelo": "OPI-0237",
                    "marca": "OPI-0237",
                    "ano": 2013
                }
            },
            function(error, response, body) {
                var _body = {};
                try {
                    _body = JSON.parse(body)
                    expect(_body.should.have.to.have.lengthOf.at.most(1))
                    process.stdout.write(_body)


                } catch (e) {
                    _body = {}
                }
                expect(response.statusCode).to.equal(200)
                done()
            }
        )
    })
})

describe("Teste API PUT Veiculo", function() {
    it("Deve receber JSON de todos veiculos atualizados", function(done) {
        request.put({
                url: urlBase + "/veiculos",
                data: {
                    "id": "b62bb01b-a45d-4897-a15a-740803782c75",
                    "placa": "TES-002",
                    "chassi": "OPI-0237",
                    "renavam": "OPI-0237",
                    "modelo": "OPI-0237",
                    "marca": "OPI-0237",
                    "ano": 2013
                }
            },
            function(error, response, body) {
                var _body = {};
                try {
                    _body = JSON.parse(body)
                    expect(_body.should.have.to.have.lengthOf.at.most(1))
                    process.stdout.write(_body)


                } catch (e) {
                    _body = {}
                }
                expect(response.statusCode).to.equal(200)
                done()
            }
        )
    })
})


describe("Teste API DELETE Veiculo", function() {
    it("Deve receber JSON com veiculos atualizados", function(done) {
        request.delete({
                url: urlBase + "/veiculos",
                data: {
                    "id": "b62bb01b-a45d-4897-a15a-740803782c75"
                }
            },
            function(error, response, body) {
                var _body = {};
                try {
                    _body = JSON.parse(body)
                } catch (e) {
                    _body = {}
                }
                expect(response.statusCode).to.equal(200)
                done()
            }
        )
    })
})