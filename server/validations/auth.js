const { body } = require('express-validator');

const registerValidation = [
  body('email', 'Invalid email format').isEmail(),
  body('password', 'Password must be at least 5 characters').isLength({
    min: 5,
  }),
  body('fullName', 'Enter your name').isLength({ min: 3 }),
  body('avatarUrl', 'Invalid link to avatar').optional().isURL(),
];

module.exports = {
  registerValidation,
};
