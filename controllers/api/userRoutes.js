const router = require("express").Router();
const { User } = require("../../models");

router.post("/new", async (req, res) => {
    try {

    } catch (err) {
        req.status(500).json(err);
    }
})

router.post("/login", async (req, res) => {
    try {

    } catch (err) {
        req.status(500).json(err);
    }
})

router.post("/logout", async (req, res) => {
    try {

    } catch (err) {
        req.status(500).json(err);
    }
})

module.exports = router;