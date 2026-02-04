const BaseSQLModel = require('./base_sql_model');

class Article extends BaseSQLModel {
    constructor() {
        super('articles');
    }

    async findAll() {
        const articles = await super.findAll();
        return articles;
    } 

    async findOne(slug) {
        const article = await super.findOne('slug', slug);
        return article;
    }

    async create(article) {
        const CreatedArticleId = await super.create(article);
        return CreatedArticleId;
    } 
}

module.exports = new Article();