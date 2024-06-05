const mongoose = require("mongoose");
const User = require('../models/user');

const postSchema = new mongoose.Schema({
    title: [String],
    content: [String],
    userid: [String]
});

const Post = mongoose.model("Post", postSchema);

async function addPost(id, title, content) {
    const newPost = await Post.create({
        title: title,
        content: content,
        userid: id
    });
    return newPost;
}

async function getPostContent(id) {
    const post = await getPost(id);
    if(!post) throw Error ("Post not found");
    return post;
}

async function updatePost(id, title, content) {
    const post = await Post.updateOne({"_id": id}, {$set: {title: title, content: content}});
    return post;
}

async function deletePost(id) {
    await Post.deleteOne({"_id": id});
}

async function getPost(id) {
    return await Post.findOne({"_id": id});
}

module.exports = {addPost, getPostContent, updatePost, deletePost}; 