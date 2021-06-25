const router = require('express').Router()
const controller = require('./controllers')

router.post('/submit', controller.submitEvent)

module.exports = router