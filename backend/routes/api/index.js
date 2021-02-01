const router = require('express').Router();

const usersRouter = require('./users')
const sessionsRouter = require('./sessions')
const feedsRouter = require('./feeds')
const collectionsRouter = require('./collections')
const businessesRouter = require('./businesses')

router.use('/users', usersRouter);
router.use('/sessions', sessionsRouter);
router.use('/feeds', feedsRouter);
router.use('/collections', collectionsRouter);
router.use('/businesses', businessesRouter);

// 404 handler for API requests
router.all('/*', (_req, res) => {
  res.out.notFound404('Not Found', 'The requested resource does not exist');
});

module.exports = router;
