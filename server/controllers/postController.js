const PostModel = require('../models/post.js');

const getAll = async (req, res) => {
  try {
    const posts = await PostModel.find().populate('user').exec();
    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed to retrieve articles',
    });
  }
};

const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    const doc = await PostModel.findOneAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      {
        returnDocument: 'after',
      }
    ).populate('user');

    if (!doc) {
      return res.status(404).json({
        message: 'Article not found',
      });
    }

    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed to retrieve articles',
    });
  }
};

const remove = async (req, res) => {
  try {
    const postId = req.params.id;

    const doc = await PostModel.findOneAndDelete({
      _id: postId,
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

const create = async (req, res) => {
  console.log(req.body);
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      user: req.body.user,
    });

    const post = await doc.save();

    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed to create post',
      error: err.message,
    });
  }
};

const update = async (req, res) => {
  try {
    const postId = req.params.id;

    await PostModel.updateOne(
      {
        _id: postId,
      },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        user: req.userId,
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
  getOne,
  remove,
  create,
  update,
};
