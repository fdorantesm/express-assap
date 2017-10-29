'use strict'

let {APP} = require('asapp')
let config = module.exports

config.express = {
	port: 8001,
	ip: '127.0.0.3',
	host: 'morada.dev'
}


config.app = {
	public: 'public',
	static: 'static',
	expose: false,
	views: {
		engine: 'pug',
		path: APP + '/views'
	}
}

// prod | test | local
config.env = process.env.NODE_ENV ? process.env.NODE_ENV : 'local'
