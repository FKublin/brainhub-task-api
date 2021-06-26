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
            res.status(200).json(event._id)
            
        }
        catch(err) {
            console.log(err)
            res.status(500).send({errMsgs: 
                err.errors
            })
        }        
    },

    getEvents: async(req, res) => {
        try{
            const allEvents = await Event.find();
            res.status(200).json(allEvents)
        }
        catch(err) {
            console.log(err)
            res.status(500).send('Could not retrieve events')
        }
    }
}