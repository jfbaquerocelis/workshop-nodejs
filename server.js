const http = require('http')
const port = 3000

const server = http.createServer(onRequest)

server.listen(port, onListening)

function onRequest(req, res){
	res.end('Hola MonteriaJS')
}

function onListening(){
	console.log(`Servidor corriendo en puerto ${port}`)
}
