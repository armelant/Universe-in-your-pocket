require('dotenv').config();
const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');
var cors = require('cors');
const {
  loginValidation,
  registerValidation,
  postCreateValidation,
  newsCreateValidation,
  adminLoginValidation,
  adminiRegisterValidation,
} = require('./validations/auth.js');
const checkAuth = require('./utils/checkAuth.js');
const adminCheck = require('./utils/adminCheck.js');
const handleValidationErrors = require('./utils/handleValidationErrors.js');
const userController = require('./controllers/userController.js');
const postController = require('./controllers/postController.js');
const NewsController = require('./controllers/NewsController.js');
const AdminController = require('./controllers/adminController.js');

// Constants;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const CLUSTER = process.env.CLUSTER;

const dbURI =
  'mongodb+srv://' +
  DB_USER +
  ':' +
  DB_PASSWORD +
  '@' +
  CLUSTER +
  '.mongodb.net/' +
  DB_NAME +
  '?retryWrites=true&w=majority&appName=Cluster0';

mongoose
  .connect(dbURI)
  .then(() => console.log('DB ok'))
  .catch((err) => console.log('DB error', err));

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


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


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

app.post(
  '/admin/login',
  adminLoginValidation,
  handleValidationErrors,
  AdminController.login
);

app.post(
  '/admin/register',
  adminiRegisterValidation,
  handleValidationErrors,
  AdminController.register
);

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

app.listen(PORT, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('Server OK');
});


app.get('/news', NewsController.getAll);
app.get('/news/:id', NewsController.getOne)


app.post('/news', adminCheck, newsCreateValidation, NewsController.create);

app.delete('/news/:id', adminCheck, NewsController.remove);
app.patch('/news/:id', adminCheck, NewsController.update); 
