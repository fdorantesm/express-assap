'use strict'

let socket = module.exports
let sio = require('socket.io')
let io = null

socket.io = function () {
	return io
};

socket.initialize = (server) => {
	io = sio(server)
	io.on('connection', (socket) => {
		console.log('connected')
	});
}
