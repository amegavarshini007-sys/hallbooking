const mongoose = require("mongoose");

console.log("DB FILE LOADED");

const connectDB = async () => {

    try {

        const conn = await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log("MongoDB Connected");
        console.log("Database Name:", conn.connection.name);

    } catch (error) {

        console.log("MongoDB Error:");
        console.log(error);

        process.exit(1);

    }

};

module.exports = connectDB;