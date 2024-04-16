const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
      unique: true,
    },
    tags: {
      type: Array,
      default: [],
    },
    viewsCount: {
      type: Number,
      default: 0,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user', // relationship between two tables
      required: true,
    },
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('post', postSchema);
