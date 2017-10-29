'use strict'

let {config} = require('asapp')
let i18n = require('i18n-2')
let options = config('i18n')

module.exports = (new(i18n)(options))
