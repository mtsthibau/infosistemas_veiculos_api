const express = require('express')
const cors = require("cors")
const session = require("express-session")
const validate = require("express-validation")
const Youch = require("youch")

const app = express()

//Configuração de quem pode acessar minha API
//(LIBERADO PARA QUALQUER APLICAÇÂO)
app.use(cors())

//Habilitando requisições HTTP e WS - Web Socket's
const server = require("http").Server(app)

//Instalação express para rotas NODE.JS
app.use(express.json());
//Express url encoded
app.use(express.urlencoded({ extended: true }))
    //Express Session
app.use(session({
    secret: 'VeiculosSecret',
    resave: false,
    saveUninitialized: false
}));

//Importando arquivo de rotas
app.use(require('./routes'))

app.use(async(err, req, res, next) => {
    if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err)
    }

    if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err, req)
        return res.json(await youch.toJSON())
    }

    return res.status(err.status || 500).json({ error: 'Internal server error' })

})

//Configuração de porta do servidor NODE.JS
server.listen(process.env.PORT || 3333)