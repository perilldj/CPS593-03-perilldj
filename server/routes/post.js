const express = require("express");
const Post = require('../models/post');
const router = express.Router();

router
    .post('/addPost', async (req, res) => {
        try{
            const post = await Post.addPost(req.body.id, req.body.title, req.body.content);
            res.send(post);
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .get('/getPostContent', async (req, res) => {
        try{
            const post = await Post.getPostContent(req.body.id);
            res.send(post);
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .put('/updatePost', async (req, res) => {
        try{
            const post = await Post.updatePost(req.body.id, req.body.title, req.body.content);
            res.send(post);
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    })

    .delete('/deletePost', async (req, res) => {
        try{
            const post = await Post.deletePost(req.body.id);
            res.send({ success: "Post deleted" });
        } catch(error) {
            res.status(401).send({message: error.message});
        }
    });

module.exports = router;