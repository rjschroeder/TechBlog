const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/new", withAuth, async (req, res) => {
    try {
        let reqbody = req.body;
        let newPost = await Post.create({...reqbody, user_id: req.session.user_id})
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put("/:id", withAuth, async (req, res) => {
    try {
        let updateData = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(updateData);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.delete("/:id", withAuth, async (req, res) => {
    try {
        let deleteData = await Post.destroy({
            where: {
                id: req.params.id
            }
        })

        if (!deleteData) {
            res.status(400).json({message: "Couldn't find this project."})
        }
        res.status(200).json(deleteData);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;