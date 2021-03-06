const express = require('express')
const mongoose = require('mongoose')

const host = require('./config/database')
class App {
  constructor () {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production'
    this.middlewares()
    this.database()
    this.routes()
  }
  database () {
    mongoose.connect(
      host.uri,
      {
        useCreateIndex: true,
        useNewUrlParser: true
      }
    )
  }
  middlewares () {
    this.express.use(express.json())
  }

  routes () {
    this.express.use(require('./routes'))
  }
}
module.exports = new App().express
