const User = require("../models/User");

const registerUser = async (req, res) => {

    try {

        const user = await User.create(req.body);

        res.status(201).json({
            success: true,
            message: "User Registered Successfully",
            user
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

const loginUser = async (req, res) => {

    try {

    

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({
                success: false,
                message: "User Not Found"
            });

        }

        if (user.password !== password) {

            return res.status(400).json({
                success: false,
                message: "Invalid Password"
            });

        }

        res.status(200).json({
            success: true,
            message: "Login Successful"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    registerUser,
    loginUser
};