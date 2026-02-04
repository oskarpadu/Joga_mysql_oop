const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const articleControllerClass = require('./controllers/article');
const articleController = new articleControllerClass();

const articleRoutes = require('./routes/article');
app.use('/', articleRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});