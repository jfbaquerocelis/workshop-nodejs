'use strict'

const http = require('http')
const fs = require('fs')
const serveStatic = require('./router')
const port = 3000

const server = http.createServer()

server.on('request', serveStatic)
server.on('listening', onListening)

server.listen(port)

function onListening(){
	console.log(`Servidor corriendo en puerto ${port}`)
}
