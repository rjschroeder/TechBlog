const router = require("express").Router();
const {Comment, Post, User} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
    try {
        let postData = await Post.findAll({
            include: [User]
        })

        let posts = postData.map((post) => post.get({plain:true}))
        res.render("feed", {posts})
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/posts/:id", async (req, res) => {
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

        if(postData) {
            let post = postData.get({plain:true});
            res.render("onePost", {
                post
            })
        } else {
            res.status(500)
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get("/login", (req, res) => {
    try {
        if(req.session.loggedIn) {
            res.redirect("dashboard");
            return;
        } else {
            res.render("login");
        }
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
        res.render("signup");
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;