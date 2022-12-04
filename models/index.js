const Comment = require("./comment");
const Post = require("./post");
const User = require("./user");

User.hasMany(Post, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
})

module.exports = { Comment, Post, User};