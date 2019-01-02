const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const controllers = require('./app/controllers')
// rota de cadastro de usuario
routes.post('/users', controllers.UserController.store)
// rota que gera os tokens
routes.post('/sessao', controllers.SessionController.store)
routes.use(authMiddleware)
// todas rotas abaixo requerem o envio do token
routes.get('/teste', controllers.UserController.teste)

module.exports = routes
