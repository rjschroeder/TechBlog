const router = require("express").Router();
const {Comment, Post, User} = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    try {
        let postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            }
        })
        //render posts
    } catch (err) {
        //redirect 
    }
})

router.get("/new", withAuth, async (req, res) => {
    try {
        //render new post
    } catch (err) {
        //redirect 
    }
})

router.get("/edit/:id", withAuth, async (req, res) => {
    try {
        let postData = await Post.findOne({
            where: {
                id: req.params.id
            }
        })

        //render edit post
    } catch (err) {
        //redirect 
    }
})

module.exports = router;