'use strict'

const http = require('http')
const fs = require('fs')
const port = 3000

const server = http.createServer()

server.on('request', onRequest)
server.on('listening', onListening)

server.listen(port)

function onRequest(req, res){
	let index = fs.readFileSync('public/index.html')
	res.end(index)
}

function onListening(){
	console.log(`Servidor corriendo en puerto ${port}`)
}
