const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'First name is required']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required']
    },
    email: {
        type: String,
        validate: {
            validator: function(v) {
              return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v);
            },
            message: props => `${props.value} is not a valid email`
          },
        required: true
    },
    eventDate: {
        type: Date,
        required: [true, 'Valid date is required']
    }
})

module.exports = mongoose.model('event', eventSchema);