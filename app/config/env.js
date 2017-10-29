'use strict'

let {config, APP} = require('asapp')
let favicon = require('serve-favicon')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let i18n = require('i18n-2')
var compression = require('compression')
let fs = require('fs')
let rfs = require('rotating-file-stream')

let locals =  config('locals')
let database =  config('mongoose')
let logDirectory =  APP + '/logs'

module.exports = (app, express) => {

	let development = function() {
		app.set('view engine', locals.app.views.engine)
		app.set('views', locals.app.views.path)
		app.set('env', locals.env)
		fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)
		let accessLogStream = rfs('access.log', {
		  interval: '1d', // rotate daily
		  path: logDirectory
		})

		app.use(logger('combined', { stream: accessLogStream }))
		app.use(bodyParser.json())
		app.use(bodyParser.urlencoded({ extended: false }))
		app.use(cookieParser())
		app.use('/', express.static(locals.app.public))
		app.use('/static', express.static(locals.app.static))
		app.set("x-powered-by", locals.app.expose)
		// app.use(favicon(locals.app.public + '/favicon.png'))
		i18n.expressBind(app, config('i18n'))
		app.use(compression())
	}

	database.load(locals.env)

	return {development}

}
