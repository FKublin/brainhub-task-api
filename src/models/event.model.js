const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: function(v) {
              return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
          },
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('event', eventSchema);