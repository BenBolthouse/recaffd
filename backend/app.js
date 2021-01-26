const express = require('express'),
  responses = require('./utils/responses'),
  helmet = require('helmet'),
  routes = require('./routes'),
  morgan = require('morgan'),
  cors = require('cors'),
  csurf = require('csurf'),
  cookieParser = require('cookie-parser');

const { environment: env } = require('./config');

const isProduction = env === 'production';

const app = express();

app.use(responses);

app.use(morgan('dev'));

app.use(cookieParser());
app.use(express.json());

if (!isProduction) {
  app.use(cors());
}
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(
  csurf({
    cookie: {
      secure: isProduction,
      sameSite: isProduction && 'Lax',
      httpOnly: true,
    },
  })
);

app.use(routes);

// TODO: add html route 404 handler

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || 'Server Error',
    message: err.message,
    errors: err.errors,
    stack: isProduction ? null : err.stack,
  });
});

module.exports = app;
