const router = require('express').Router();

const usersRouter = require('./users')
const sessionsRouter = require('./sessions')
const feedsRouter = require('./feeds')

router.use('/users', usersRouter);
router.use('/sessions', sessionsRouter);
router.use('/feeds', feedsRouter);

// 404 handler for API requests
router.all('/*', (_req, res) => {
  res.out.notFound404('Not Found', 'The requested resource does not exist');
});

module.exports = router;
