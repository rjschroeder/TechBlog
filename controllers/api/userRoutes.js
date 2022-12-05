const router = require("express").Router();
const { User } = require("../../models");

router.post("/new", async (req, res) => {
    try {
        let userData = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;

            res.json(userData);
        })
    } catch (err) {
        req.status(500).json(err);
    }
})

router.post("/login", async (req, res) => {
    try {
        let userData = await User.findOne({
            where: {
                username: req.body.username
            }
        })

        let checkPass = await userData.checkPassword(req.body.password);

        if (!checkPass || !userData) {
            res.status(500).json({ message: "Invalid username or password"})
            return
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.logged_in = true;
            res.json({ 
                userData,
                message: "Successful login!"
            })
        })

    } catch (err) {
        res.status(500).json(err);
    }
})

router.post("/logout", async (req, res) => {
    try {
        if(req.session.logged_in) {
            req.session.destroy(() => {
                res.status(200).end();
            })
        } else {
            res.status(400).end();
        }
    } catch (err) {
        req.status(500).json(err);
    }
})

module.exports = router;