const { body } = require('express-validator');

// Authorization check

const loginValidation = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'Password must be at least 5 characters').isLength({
    min: 5,
  }),
];

// Registration
const registerValidation = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'Password must be at least 5 characters').isLength({
    min: 5,
  }),
  body('fullName', 'Enter your name').isLength({ min: 3 }),
  body('avatarUrl', 'Invalid link to avatar').optional().isURL(),
];

// Validation for articles
const postCreateValidation = [
  body('title', 'Type the title of the article')
    .optional()
    .isLength({ min: 3 })
    .isString(),
  body('text', 'Type the text of the article')
    .optional()
    .isLength({ min: 3 })
    .isString(),
  body('imageUrl', 'Invalid link to image').optional().isString(),
];

const newsCreateValidation = [
  body('title', 'Enter title').isLength({min: 3}).isString(),
  body('text', 'Enter text').isLength({ min: 10 }).isString(),
  body('imageUrl', 'invalid url').optional().isString(),
];

module.exports = {
  loginValidation,
  registerValidation,
  postCreateValidation,
  newsCreateValidation,

};
