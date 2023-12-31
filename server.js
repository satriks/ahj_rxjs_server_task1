const Koa = require('koa')
const { koaBody } = require('koa-body')
const { Date } = require('core-js')
const cors = require('@koa/cors')
const port = 7070
const app = new Koa()
const createMessage = require('./generator/generatorControl')

const router = require('./routers')

console.log(new Date(Date.now()).toLocaleString())

app.use(koaBody({
  multipart: true
}))
app.use(cors())
app.use(router())

app.listen(port)
console.log('listen port ' + port)

createMessage()
