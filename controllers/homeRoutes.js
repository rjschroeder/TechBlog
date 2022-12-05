const router = require("express").Router();
const {Comment, Post, User} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        let postData = await Post.findAll({
            include: [User]
        })
        res.status(200).json(postData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/post/:id", withAuth, async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/login", withAuth, async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/signip", withAuth, async (req, res) => {
    try {

    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;