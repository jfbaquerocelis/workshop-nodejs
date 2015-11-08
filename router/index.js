const path = require('path')
const st = require('st')
const Router = require('router')

const router = Router()

const mount = st({
	path : path.join(__dirname, '..', 'public'),
	index : 'index.html',
	passthrough : true
})

const monteriajs = {
	"name" : "MonteríaJS",
	"city" : "Montería",
	"description" : "Comunidad de Javascript y Desarrollo Web",
	"web" : "http://meetup.com/monteriajs"
}

router.get('/monteriajs', function (req, res){
	res.setHeader('Content-Type', 'application/json; charset=utf-8')
	res.end(JSON.stringify(monteriajs))
})

function serveStatic (req, res){
	mount(req, res, function (err){
		if (err) return fail(err, res)
		
		router(req, res, function (err){
			if (err) return fail(err, res)

			res.setHeader('Content-Type', 'text/plain')
			res.end(`404 Not Found: ${req.url}`)
		})
	})
}

function fail(err, res){
	res.statusCode = 500
	res.setHeader('Content-Type', 'text/plain')
	res.end(err.message)
}

module.exports = serveStatic;
