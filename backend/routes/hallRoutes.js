const express = require("express");

const router = express.Router();

const {
    getAllHalls
} = require("../controllers/hallController");

router.get("/", getAllHalls);

module.exports = router;