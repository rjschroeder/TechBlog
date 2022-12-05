const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/new/:postid", withAuth, async (req, res) => {
    try {
        let reqbody = req.body;
        let newComment = await Comment.create({
            ...reqbody, 
            post_id: req.params.postid,
            user_id: req.session.user_id})
        res.status(200).json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;