const BaseSQLModel = require('./base_sql_model');

class Article extends BaseSQLModel {
    constructor() {
        super('articles');
    }

    async findAll() {
        const articles = await super.findAll();
        return articles;
    } 
}

module.exports = new Article();