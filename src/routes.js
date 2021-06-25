const router = require('express').Router()
const controller = require('./controllers')

router.post('/events', controller.submitEvent)

router.get('/events', controller.getEvents)

module.exports = router