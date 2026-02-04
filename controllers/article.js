const con = require('../utils/db');
const articleDbModel = require('../models/article');
const articleModel = require('../models/article');

class articleController {
    constructor() {
        this.articleModel = articleModel;
    }

    async getAllArticles(req, res) {
        const articles =  await articleModel.findAll();
        res.status(200).json(articles);
    }
    
    async getArticleBySlug(req, res) {
        const article = await articleModel.findOne(req.params.slug);
        res.status(200).json(article);
    }
};

module.exports = articleController;