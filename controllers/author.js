const authorDbModel = require('../models/author');
const authorModel = require('../models/author');

const authorModel = new authorModel();
const articleModel = new articleModel();

class authorController {
    constructor() {
        const authors = []
    }
    
    async getAuthorById(req, res) {
        const author = await authorModel.findById(req.params.author_id);
        const articles = await articleModel.findMany('author_id', author.id);
        author['articles'] = articles;
        res.status(200).json({author: author});
    }
};

module.exports = authorController;