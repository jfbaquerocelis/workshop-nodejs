'use strict'

const http = require('http')
const fs = require('fs')
const path = require('path')
const port = 3000

const server = http.createServer()

server.on('request', onRequest)
server.on('listening', onListening)

server.listen(port)

function onRequest(req, res){
	let uri = req.url

	if (uri.startsWith('/index') || uri === '/'){
		let index = path.join(__dirname, 'public', 'index.html')
		let reader = fs.createReadStream(index)
		
		res.setHeader('Content-Type', 'text/html')
		reader.pipe(res)

		reader.on('error', function (err){
			res.setHeader('Content-Type', 'text/plain')
			res.end(err.message)
		})
	}

	if (uri.startsWith('/app.js')){
		let app = path.join(__dirname, 'public', 'app.js')
		let reader = fs.createReadStream(app)

		res.setHeader('Content-Type', 'text/javascript')
		reader.pipe(res)

		reader.on('error', function (err){
			res.setHeader('Content-Type', 'text/plain')
			res.end(err.message)
		})
	}
}

function onListening(){
	console.log(`Servidor corriendo en puerto ${port}`)
}
