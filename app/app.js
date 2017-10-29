'use strict'

let express = require('express')
let {config, helper, route} = require('asapp')

let app = express()
let environment = config('env')(app, express)
let filter = helper('filters')

environment.development()

app.use('/', filter.lang, route('router'))

app.use(function(req, res, next) {
	let err = new Error('Not Found')
	err.status = 404
	next(err)
})

app.use(function(err, req, res, next) {
	res.locals.message = err.message
	res.locals.error = req.app.get('env') === 'local' ? err : {}
	res.status(err.status || 500)
	res.render('error')
})


module.exports = app
