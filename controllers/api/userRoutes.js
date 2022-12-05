const router = require("express").Router();
const { User } = require("../../models");

router.post("/new", async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;

            res.status(200).json(userData);
        })
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