const router = require("express").Router();
const {Comment, Post, User} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
    try {
        let postData = await Post.findAll({
            include: [User]
        })
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/post/:id", async (req, res) => {
    try {
        let postData = await Post.findOne({
            where: {
                id: req.params.id
            },
            include: [
                User,
                {
                    model: Comment,
                    include: [User]
                }
            ]
        })
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/login", (req, res) => {
    try {
        if(req.session.loggedIn) {
            res.redirect("/");
            return;
        }
        res.status(200).json({ message: "will login here"})
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/signup", (req, res) => {
    try {
        if(req.session.loggedIn) {
            res.redirect("/");
            return;
        }
        res.status(200).json({ message: "will signup here"})
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;