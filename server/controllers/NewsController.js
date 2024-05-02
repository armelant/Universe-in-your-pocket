const NewsModel = require('../models/News.js');

const create = async (req, res) => {
    try {
        const  doc = new NewsModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
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

const getOne = async (req, res) => {
    try {
        const newsId = req.params.id;

        const doc = await NewsModel.findOne({ _id: newsId });

        if (!doc) {
            return res.status(404).json({
                message: 'News not found'
            });
        }

        res.json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: 'Internal server error'
        });
    }
}

const remove = async (req, res) => {
    try {
      const newsId = req.params.id;
  
      const doc = await NewsModel.findOneAndDelete({
        _id: newsId,
      });
  
      if (!doc) {
        return res.status(404).json({
          message: 'Article not found',
        });
      }
  
      res.json({
        success: true,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Failed to delete article',
      });
    }
  };


  const update = async (req, res) => {
    try {
      const newsId = req.params.id;
  
      await NewsModel.updateOne(
        {
          _id: newsId,
        },
        {
          title: req.body.title,
          text: req.body.text,
          imageUrl: req.body.imageUrl,
        }
      );
  
      res.json({
        success: true,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: 'Failed to update article',
      });
    }
  };



module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
  };
  