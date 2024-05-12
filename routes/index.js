// Purpose: Handle all routes related to login.
const express = require("express");
const router = express.Router();

const {
    ping,
} = require("../controllers/index");

router.route("/ping")
    .get(ping);

module.exports = router;