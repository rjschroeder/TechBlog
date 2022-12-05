const router = require("express").Router();
const {Post} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        let postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            }
        })
        let posts = postData.map((post) => post.get({plain:true}));
        res.render('feed', {
            layout: "dashboard",
            posts
        })
    } catch (err) {
        res.redirect("login")
    }
})

router.get("/new", withAuth, async (req, res) => {
    try {
        res.render("new", {
            layout: "dashboard"
        })
    } catch (err) {
        res.redirect("main")
    }
})

router.get("/edit/:id", withAuth, async (req, res) => {
    try {
        let postData = await Post.findOne({
            where: {
                id: req.params.id
            }
        })

        if (postData){
            let post = postData.get({plain:true});
            res.render("edit", {
                layout: "dashboard",
                post
            })
        } else {
            res.status(500)
        }
    } catch (err) {
        res.redirect("login")
    }
})

module.exports = router;