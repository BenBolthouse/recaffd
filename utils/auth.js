/**
 * * ==================================
 * *  Authentication and Authorization
 * * ==================================
 */

const jwt = require('jsonwebtoken');

const { jwtConfig, production } = require('../config');
const { Role, User } = require('../db/models');
const { secret, expiresIn } = jwtConfig;

/**
 * Set the response JWT cookie with user identity claims.
 * @param {Express middleware response object} res
 * @param {Application `User` object} user
 */
const setJwtTokenCookie = (res, user) => {
  const token = jwt.sign(user, secret, { expiresIn: parseInt(expiresIn) });

  res.cookie('authToken', token, {
    maxAge: expiresIn * 1000,
    httpOnly: true,
    secure: production,
    sameSite: production && 'Lax',
  });

  return token;
};

/**
 * Express middleware; get the user from the database and attach to the request.
 * @param {Express middleware request object} req
 * @param {Express middleware response object} res
 * @param {Express middleware next function} next
 */
const restoreUser = (req, res, next) => {
  const { authToken } = req.cookies;

  return jwt.verify(authToken, secret, null, async (err, payload) => {
    if (err) return next();

    try {
      const { id } = payload;
      req.user = await User.findByPk(id, { include: { model: Role, as: 'roles' } });
    } catch (e) {
      res.clearCookie('token');
      return next();
    }

    if (!req.user) res.clearCookie('token');

    return next();
  });
};

/**
 * Express middleware; grant access to only those who have an account.
 */
const inUserRole = [
  restoreUser,
  (req, res, next) => {
    if (req.user.roles.find(r => r.name === 'USER')) return next();
    else
      return res.out.unauthorized401(
        'Unauthorized',
        'You must have an account to access the resource at this location'
      );
  },
];

/**
 * Express middleware; grant special access to those who have business accounts.
 */
const inBusinessOwnerRole = [
  restoreUser,
  (req, res, next) => {
    if (req.user.roles.find('BUSINESS_OWNER')) return next();
    else
      return res.out.unauthorized401(
        'Unauthorized',
        'You must have a business account to access the resource at this location'
      );
  },
];

module.exports = { setJwtTokenCookie, restoreUser, inUserRole, inBusinessOwnerRole };
