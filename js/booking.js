const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

    hallName: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mobile: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    functionType: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Booking", bookingSchema);