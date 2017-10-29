'use strict'

let express = require('express')
let router = module.exports = router = express.Router()
let {load} = require('asapp')

router.get('/test', load.http.middlewares.test.index)