'use strict'

let express = require('express')
let app = express()
let {config, application} = require('asapp')
let router = module.exports = express.Router()
let environment = config('env')(app, express)
let route = module.exports
let load = application('load')

environment.development()

router.get('/', (req, res) => {
	res.render('index', { title: 'express asapp' })
})

router.use('/test', load.http.middlewares.test.index)
