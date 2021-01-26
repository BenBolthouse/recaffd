const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

const { User, Hash, Role } = require('../../db/models');
const { validateUserSignUp } = require('../utils/validators');

/**
 * * =================
 * *  POST /api/users
 * * =================
 */
router.post(
  '/',
  validateUserSignUp,
  asyncHandler(async (req, res, _next) => {
    const { password } = req.body;
    let user;
    try {
      const hash = await bcrypt.hash(password, 10);
      const userRole = await Role.findOne({ where: { name: 'USER' } });
      user = await User.create(
        {
          ...req.body,
          hashes: [{ type: 'PASSWORD', hash }],
        },
        {
          include: [{ model: Hash, as: 'hashes' }],
        }
      );
      await user.addRole(userRole);
    } 
    catch (e) {
      return res.out.badRequest400(
        e.name,
        'User could not be created.',
        e.errors.map(({ path, message }) => {
          return { param: path, msg: message };
        }),
        e.stack
      );
    }
    user.roles = ['USER'];
    res.out.created201('User created', user.scopedDefault());
  })
);

module.exports = router;
