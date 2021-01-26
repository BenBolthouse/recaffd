const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { User, Hash, Role } = require('../../db/models');
const { validateSignIn } = require('../utils/validators');
const { setJwtTokenCookie, restoreUser } = require('./auth');


/**
 * * =======================
 * *  Create a user session
 * * =======================
 */
router.post(
  '/',
  validateSignIn,
  asyncHandler(async (req, res) => {
    const { emailAddress, password } = req.body;

    let user = await User.findOne({
      where: { emailAddress },
      include: [
        { model: Hash, as: 'hashes' },
        { model: Role, as: 'roles' },
      ],
    });
    
    if (!user) {
      return res.out.unauthorized401(
        'Login Failed',
        'A user does not exist with the provided email address'
      );
    }

    user = await user.signIn(password);

    if (!user) {
      return res.out.unauthorized401(
        'Login Failed',
        'Password is incorrect'
      );
    }

    await setJwtTokenCookie(res, user.scopedToken());

    return res.out.ok200('Sign in successful', user.scopedDefault());
  })
);

/** 
 * * =========================
 * *  Retrieve a user session
 * * =========================
 */
router.get('/', restoreUser, (req, res) => {
  const {user} = req;
  
  if (user) return res.out.ok200('Success', user);

  return res.out.unauthorized401('Not signed in');
})

/** 
 * * =======================
 * *  Delete a user session
 * * =======================
 */
router.delete('/', restoreUser, (req, res) => {
  if (req.user) {
    res.clearCookie('authToken');
    return res.out.ok200('Successfully signed out');
  }
  return res.out.ok200('Already signed out');
})

module.exports = router;
