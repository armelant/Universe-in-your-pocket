const mongoose = require('mongoose');

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    text:{
        type: String,
        required: true,
        unique: true,
    },

    imageUrl: String,

},
    {
        timestamps: true,     
    }
);

module.exports = mongoose.model('news', NewsSchema);
