const express = require('express');
let { production } = require('../config');

const router = require('express').Router();


// automatically send xsrf cookie token in development environment for react debugging
if (!production) {
  router.get('/api/csrf/restore', (req, res) => {
    res.cookie('xsrfToken', req.csrfToken());
    return res.json({message: 'CSRF cookie sent with response'});
  });
}

// mount api routes after csrf restore route
router.use('/api', require('./api'));

// serves the react index in production along with xsrf cookie token
if (production) {
  const path = require('path');

  // serve react as default / route
  router.get('/', (req, res) => {
    res.cookie('xsrfToken', req.csrfToken());
    return res.sendFile(path.resolve(__dirname, '../../frontend', 'build', 'index.html'));
  });

  router.use(express.static(path.resolve('../frontend/build')));

  // serve react index as default /api route
  router.get(/^(?!\/?api).*/, (req, res) => {
    res.cookie('xsrfToken', req.csrfToken());
    return res.sendFile(path.resolve(__dirname, '../../frontend', 'build', 'index.html'));
  });
}

module.exports = router;
