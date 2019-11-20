/*jshint esversion: 8 */

const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//Fetch all
router.get('/', async (req,res)=>{
    try {
        const posts = await Post.find();
        res.json(posts);
    }catch (err) {
        res.json({message:err});
    }
});

//Post something
router.post('/', async (req, res)=>{
    const post = new Post(req.body);
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (err) {
        res.json({message: err});
    }
});

//Get a specific Post
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (err) {
        res.json({message: err});
    }
});

//Delete a Post
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.remove({
            _id: req.params.postId
        });
        res.json(removedPost);
    } catch (err) {
        res.json({message: err});
    }
});

//Update a Post
router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            {_id: req.params.postId},
            {$set: req.body}
        );
        res.json(updatedPost);
    } catch (err) {
        res.json({message: err});
    }
});

module.exports = router;