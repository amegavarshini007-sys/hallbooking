const Hall = require("../models/Hall");

const getAllHalls = async (req, res) => {

    try {

        const halls = await Hall.find();

        console.log("Halls Count:", halls.length);

        res.json(halls);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getAllHalls
};