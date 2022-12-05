const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/new", withAuth, async (req, res) => {
    try {
        let reqbody = req.body;
        let newComment = await Comment.create({...reqbody, user_id: req.session.userId})
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;