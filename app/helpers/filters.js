'use strict'

exports.lang = (req, res, next) => {
	req.i18n.setLocaleFromSubdomain()
	next()
}