const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema({

    hallName: String,

    location: String,

    capacity: Number,

    price: Number,

    image: String

});

module.exports = mongoose.model("Hall", hallSchema,"halls");