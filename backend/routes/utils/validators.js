const { check, validationResult } = require('express-validator');

const username = check('username')
  .exists({ checkFalsy: true })
  .withMessage('Username is required')
  .isLength({ min: 5, max: 50 })
  .withMessage('Username must be between 5 and 50 characters long')
  .matches(/^([a-zA-Z0-9])*$/)
  .withMessage('Username can only contain numbers, letters, hyphens and underscores');

const emailAddress = check('emailAddress')
  .exists({ checkFalsy: true })
  .withMessage('Email address is required')
  .isEmail()
  .withMessage('Email address must be a valid email address')
  .isLength({ max: 50 })
  .withMessage('Email address must be less than 50 characters long');

const emailAddressExists = check('emailAddress')
  .exists({ checkFalsy: true })
  .withMessage('Email address is required')

const password = check('password')
  .exists({ checkFalsy: true })
  .withMessage('Password is required')
  .matches(
    /^(?=.*\d)(?=.*[\~\!\@\#\$\%\&\*\?\_\-])(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*[\ ]).{8,50}$/
  )
  .withMessage(
    'Password must be between 8 and 50 characters in length ' +
      'and must contain one or more of the following: ' +
      '1. An uppercase letter, ' +
      '2. a lowercase letter, ' +
      '3. a number, and ' +
      '4. one of the following special characters: ' +
      '~ ! @ # $ % & * ? _ -'
  );

const passwordExists = check('password')
  .exists({ checkFalsy: true })
  .withMessage('Password is required')

const confirmPassword = check('confirmPassword')
  .exists({ checkFalsy: true })
  .withMessage('Confirm password is required')
  .custom((v, { req }) => {
    if (v === req.body.password) return true;
    throw Error('Confirm password must be identical to password');
  });

const firstName = check('firstName')
  .custom(v => {
    if (v === undefined || /^([a-zA-Z\-]){1,50}$/.test(v)) return true;
  })
  .withMessage(
    'First name can only contain letters and hyphens ' +
      'and must be between 1 and 50 characters long'
  );

const lastName = check('lastName')
  .custom(v => {
    if (v === undefined || /^([a-zA-Z\-]){1,50}$/.test(v)) return true;
  })
  .withMessage(
    'Last name can only contain letters and hyphens ' +
      'and must be between 1 and 50 characters long'
  );

const validate = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.out.badRequest400(
      'ValidationError',
      'User could not be created.',
      result.errors.map(({ param, msg }) => {
        return { param, msg };
      })
    );
  }
  next();
};

const validateUserSignUp = [[
  username,
  firstName,
  lastName,
  emailAddress,
  password,
  confirmPassword,
], validate];

const validateSignIn = [[
  emailAddressExists,
  passwordExists,
], validate];

module.exports = {
  validateUserSignUp,
  validateSignIn,
};
