const router = require('express').Router();

router.use('/api', require('./api'));

// React routes
// router.get('/token-me', (req, res, next) => {
//   res.cookie('xsrfToken', req.csrfToken());
//   res.send("You've been tokened!!!");
// });

module.exports = router;
