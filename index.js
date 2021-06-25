const express = require('express')
const router = require('./src/routes')
const mongoose = require('mongoose');

const app = express()

app.use(express.json())
app.use(express.urlencoded());

mongoose.connect('mongodb://localhost:27017/event-manager', 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, 
    () => {
        console.log('Successfully connected with MongoDB');
    });


app.use('/', router)

app.listen(4000, () => {
    console.log('Listening on port 4000')
})