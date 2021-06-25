const Event = require('./models/event.model')

module.exports = {
    submitEvent: async (req, res) => {

        
        const event = new Event({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            eventDate: req.body.eventDate
        })

        try {
            await event.save()
            res.status(200).send('Event created')
            
        }
        catch(err) {
            console.log(err)
            res.status(500).send({errors: err.errors})
        }

        
    }
}