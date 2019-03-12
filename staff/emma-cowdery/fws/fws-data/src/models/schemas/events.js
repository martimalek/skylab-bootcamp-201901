const { Schema } = require('mongoose')

const Events = new Schema({
    restaurantId: {
        type: String
    },

    participants: [{
        type: String,
        unique: true
    }],

    eventTime: {
        type: String,
        required: true
    },

    eventDate: {
        type: String,
        required: true
    },

    reservationName: {
        type: String,
        required: true
    },

    restaurantCategory: {
        type: String,
        required: true
    },

    eventLocation: [{
        type: Number,
        required: true
    }]
})

module.exports = Events
