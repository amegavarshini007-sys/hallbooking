const mongoose = require("mongoose");
console.log("DB FILE LOADED");
const connectDB = async () => {

    try {

        await mongoose.connect(
            "mongodb://127.0.0.1:27017/hallcollection"
        );

        console.log("MongoDB Connected");
        console.log("Database Name:",
mongoose.connection.name);

    } catch (error) {

        console.log("MongoDB Error:");
        console.log(error);

    }

};

module.exports = connectDB;