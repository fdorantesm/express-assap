'use strict'

let {config} = require('asapp')
let mongoose = require('mongoose')
let _ = require('lodash')

let env = config('locals').env
let connection = config('database')

mongoose.set('debug', true)
mongoose.Promise = global.Promise

exports.load = (environment) => {
	environment = _.indexOf(['prod','test','local'], environment)  >= 0 ? environment : 'local'

	let config = connection.data[environment]
	let uri = {}

	uri.auth = config.user ? `${config.user}:${config.pass}@` : ''
	uri.host = `${config.host}`
	uri.base = config.base ? `/${config.base}` : 'test'
	uri.port = config.port ? `:${config.port}` : ''
	uri.string = `mongodb://${uri.auth}${uri.host}${uri.port}${uri.base}`

	return mongoose.connect(uri.string, {
		useMongoClient:true
	})
}
