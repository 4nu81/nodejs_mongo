/*jshint esversion: 8 */

const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    text: String,
    author: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);