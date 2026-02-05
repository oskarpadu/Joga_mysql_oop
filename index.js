const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const articleRoutes = require('./routes/article');
app.use('/', articleRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});