"use strict"

let consign = require('consign')
let system = {}

consign({cwd:'app'})
	.include("config")
	.include("helpers")
	.include("db")
	.include("libraries")
	.include("locales")
	.include("http/controllers")
	.include("http/middlewares")
	.into(system)
	
module.exports = system
