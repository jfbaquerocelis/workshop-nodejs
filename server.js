const http = require('http')
const port = 3000

const server = http.createServer()

server.on('request', onRequest)
server.on('listening', onListening)

server.listen(port)

function onRequest(req, res){
	res.end('Hola MonteriaJS')
}

function onListening(){
	console.log(`Servidor corriendo en puerto ${port}`)
}
