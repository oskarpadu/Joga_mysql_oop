const express = require('express');
const path = require('path');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));

const hbs = require('express-handlebars');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: __dirname + '/views/layouts/' }));

app.use(bodyParser.urlencoded({ extended: true }));

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'qwerty',
    database: 'joga_mysql'
});

con.connect((err) => {
    if (err) throw err;
    console.log('Connected to joga_mysql database!');
});

const articleRoutes = require('./routes/article');

app.use('/', articleRoutes);
app.use('/article', articleRoutes);

app.get('/author/:author_id', (req,res) => {
    let query = `SELECT * FROM articles WHERE author_id = ${req.params.author_id}`;
    let articles = [];
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result;
        console.log(articles);
        query = `SELECT name FROM author WHERE id = ${req.params.author_id}`;
        let author
        con.query(query, (err, result) => {
            if (err) throw err;
            author = result[0];
            console.log(author);
            res.render('author', { author: author, articles: articles });
        });
        res.render('author', { articles: articles });
    });
});

app.get('/', (req, res) => {
    let query = 'SELECT * FROM articles';
    let articles = [];
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result;
        console.log(articles);
    });
    res.render('index', { articles: articles });
});

app.get('/article/:slug', (req, res) => {
    let query = 'SELECT * FROM articles WHERE slug =" ${req.params.slug}" ';
    let article
    con.query(query, (err, result) => {
        if (err) throw err;
        article = result[0];
        console.log(article);
        res.render('article', { article: article });
    });
}); 

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});