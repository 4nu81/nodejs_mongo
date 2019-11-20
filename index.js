/*jshint esversion: 8 */

require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const {logErrors, clientErrors, errorHandler} = require('./errorHandler');

//Middleware
app.use(express.json());

//Import Routes
const postRoute = require('./routes/posts');
app.use('/posts', postRoute);

//DB Connect
const options = { 
    useNewUrlParser: true,
    useUnifiedTopology: true
};
console.log(process.env.DB_CONNECTION)
mongoose.connect(process.env.DB_CONNECTION, options).catch(err=>{
    console.error(err.stack);
    console.error('Whitelisted your IP?');
});
mongoose.connection.once('connected', ()=>{
    console.info('connected to DB!');
});

// Error Handler

app.use(logErrors);
app.use(clientErrors);
app.use(errorHandler);

//Listener
app.listen(3000);