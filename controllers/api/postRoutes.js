const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/new", withAuth, async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
})

router.put("/:id", withAuth, async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete("/:id", withAuth, async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;