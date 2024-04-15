const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const { validationResult } = require('express-validator');
const {
  loginValidation,
  registerValidation,
  postCreateValidation,
} = require('./validations/auth.js');
const userModel = require('./models/user.js');
const checkAuth = require('./utils/checkAuth.js');
const postModel = require('./models/post.js');
const User = require('./models/user.js');

// require('dotenv').config();

//Constants
// const PORT = process.env.PORT;
// const DB_USER = process.env.DB_USER;
// const DB_DB_PASSWORD = process.env.DB_DB_PASSWORD;
// const DB_NAME = process.env.DB_NAME;
// const CLUSTER = process.env.CLUSTER;

// const dbURI =
//   'mongodb+srv://' +
//   process.env.DB_USER +
//   ':' +
//   process.env.DB_DB_PASSWORD +
//   '@' +
//   process.env.CLUSTER +
//   '.mongodb.net/' +
//   process.env.DB_NAME +
//   '?retryWrites=true&w=majority&appName=Cluster0';

// mongoose
//   .connect(dbURI)
//   .then((result) => {
//     console.log('Connected to DB');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

mongoose
  .connect(
    'mongodb+srv://Andrei:Andrei12345@cluster0.ykxhvdv.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('DB ok'))
  .catch(() => console.log('DB error', err));

const app = express();

app.use(express.json());

// User
app.post('/auth/login', loginValidation, async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.body.email });

    if (!user) {
      return res.status(404).json({
        message: 'User is not found',
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.passwordHash
    );

    if (!isValidPass) {
      return res.status(400).json({
        message: 'Wrong login or password',
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      }
    );
    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Authorization attempt failed',
    });
  }
});

app.post('/auth/register', registerValidation, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array());
    }

    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const doc = new userModel({
      email: req.body.email,
      fullName: req.body.fullName,
      avatarUrl: req.body.avatarUrl,
      passwordHash: hash,
    });

    const user = await doc.save();

    const token = jwt.sign(
      {
        _id: user._id,
      },
      'secret123',
      {
        expiresIn: '30d',
      }
    );

    const { passwordHash, ...userData } = user._doc;

    res.json({
      ...userData,
      token,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Registration attempt failed',
    });
  }
});

app.get('/auth/me', checkAuth, async (req, res) => {
  try {
    const user = await userModel.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: 'User is not found',
      });
    }

    const { passwordHash, ...userData } = user._doc;

    res.json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Access denied',
    });
  }
});

// Blog

app.get('/posts', async (req, res) => {
  try {
    const posts = await postModel.find().populate('user').exec();

    res.json(posts);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Failed to retrieve articles',
    });
  }
});

// Creating
app.post('/posts', checkAuth, postCreateValidation, async (req, res) => {
  try {
    const doc = new postModel({
      title: req.body.title,
      text: req.body.text,
      tags: req.body.tags,
      imageUrl: req.body.imageUrl,
      user: req.userId,
    });

    const post = await doc.save();

    res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'Article creation failed',
    });
  }
});

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});
