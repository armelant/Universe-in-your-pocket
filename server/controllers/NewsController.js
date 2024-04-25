const NewsModel = require('../models/News.js');

const create = async (req, res) => {
    try {
        const  doc = new NewsModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            user: req.userId,
        });

        const news = await doc.save();

        res.json(news);
    } catch (err) {
        console.error(err);
            res.status(500).json({ 
                message: 'News not created'
            });
    }

}

const getAll = async (req, res) => {
    try {
        const allNews = await NewsModel.find();
        res.json(allNews);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'News not found'
        });
    }
}

module.exports = {
    getAll,
    create,
  };
  