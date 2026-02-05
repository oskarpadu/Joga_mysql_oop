const articleDbModel = require('../models/article');
const articleModel = new articleDbModel();

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

    async createNewArticle(req, res) {
        console.log('creating new article')

        const newArticle = {
            name: req.body.name,
            slug: req.body.slug,
            image: req.body.image,
            body: req.body.body,
            published: new Date().toISOString().slice(0, 19).replace('T', ' '),
            author_id: req.body.author_id
        }
        console.log(newArticle) 
        const createdArticleId = await articleModel.create(newArticle);
        res.status(201).json({
            message: `created article with id: ${createdArticleId}`,
            article: {id: createdArticleId, ...newArticle}
        }); 
    }
};

module.exports = articleController;