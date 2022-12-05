const Comment = require("./comment");
const Post = require("./post");
const User = require("./user");

Post.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE"
})

Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

module.exports = { Comment, Post, User};