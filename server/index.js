const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
var cors = require('cors');
const {
  loginValidation,
  registerValidation,
  postCreateValidation,
} = require('./validations/auth.js');
const checkAuth = require('./utils/checkAuth.js');
const handleValidationErrors = require('./utils/handleValidationErrors.js');
const userController = require('./controllers/userController.js');
const postController = require('./controllers/postController.js');

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

mongoose
  .connect(
    'mongodb+srv://Andrei:Andrei12345@cluster0.ykxhvdv.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('DB ok'))
  .catch(() => console.log('DB error', err));

const app = express();
const PORT = process.env.PORT || 3000;

// Creating a storage for images
const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, file.originalname);
  },
});

// function that allows us to use multer
const upload = multer({ storage });

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3001',
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log('Incoming request from origin:', req.headers.origin);
  next();
});
// Get a request to get a static file
app.use('/uploads', express.static('uploads'));

// User
app.post(
  '/auth/login',
  loginValidation,
  handleValidationErrors,
  userController.login
);
app.post(
  '/auth/register',
  registerValidation,
  handleValidationErrors,
  userController.register
);
app.get('/auth/me', checkAuth, userController.getMe);

// Route
app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

// Blog

// app.get('/tags', postController.getLastTags);
app.get('/posts', postController.getAll);
// app.get('/posts/tags', postController.getLastTags);
app.get('/posts/:id', postController.getOne);
app.post(
  '/posts',
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  postController.create
);
app.delete('/posts/:id', checkAuth, postController.remove);
app.patch(
  '/posts/:id',
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  postController.update
);

app.listen(3000, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});
