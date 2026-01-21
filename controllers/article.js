const con = require('../utils/db');

const getAllArticles = (req, res) => {
    let query = 'SELECT * FROM articles';
    let articles = [];
    confirm.query(query, (err, result) => {
        if (err) throw err;
        articles = result;
        res.render('index', { articles: articles });
    });
};

const getArticleBySlug = (req, res) => {
    let query = `SELECT * articles.name as article_name,
    author.name as author_name,
    FROM article
    INNER join author
    ON author.id = article.author_id WHERE slug = "${req.params.slug}"`;
    let article;
    confirm.query(query, (err, result) => {
        if (err) throw err;
        article = result[0];
        res.render('article', { article: article });
    });
};

const authorById = (req, res) => {
    let query = `SELECT * FROM articles WHERE author_id = ${req.params.author_id}`;
    let articles = [];
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result;
        query = `SELECT name FROM author WHERE id = ${req.params.author_id}`;
        let author;
        con.query(query, (err, result) => {
            if (err) throw err;
            author = result[0];
            res.render('author', { author: author, articles: articles });
        });
    });
};

module.exports = {
    getAllArticles,
    getArticleBySlug
};