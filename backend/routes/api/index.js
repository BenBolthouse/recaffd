const router = require('express').Router();

const usersRouter = require('./users')
const sessionsRouter = require('./sessions')

router.use('/users', usersRouter);
router.use('/sessions', sessionsRouter);

// 404 handler for API requests
router.all('/*', (_req, res) => {
  res.out.notFound404('Not Found', 'The requested resource does not exist');
});

module.exports = router;
