"user strict";

// Handle ping route
async function ping(req, res) {
    return res.send({
        Status: 200,
        Message: "Server is running."
    });
}

module.exports = {
    ping,
}