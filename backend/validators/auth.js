const { check } = require('express-validator');

exports.userSignupValidator = [
  check('name').not().isEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Must be a valid email adress'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 charactes long'),
];

exports.userSigninValidator = [
  check('email').isEmail().withMessage('Must be a valid email adress'),
  check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 charactes long'),
];
