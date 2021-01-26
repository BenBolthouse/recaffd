/**
 * * ===============
 * *  API Responses
 * * ===============
 */

const { environment: env } = require('../config');

const isDev = env === 'development';

const sanitizeDetails = message => message && message.replace(/\n\  */g, '');

/**
 * Express middleware; load templated http responses onto the response object.
 * @param {Express middleware request object} req 
 * @param {Express middleware response object} res 
 * @param {Express middleware next function} next 
 */
module.exports = (req, res, next) => {
  res.out = {
    ok200: (message, data) => {
      return res.status(200).json({
        message: sanitizeDetails(message),
        status: 200,
        requestHttpMethod: req.method,
        requestUrl: req.originalUrl,
        data,
      });
    },
    created201: (message, data) => {
      return res.status(201).json({
        message: sanitizeDetails(message),
        status: 201,
        requestHttpMethod: req.method,
        requestUrl: req.originalUrl,
        data,
      });
    },
    noContent204: (message, data) => {
      return res.status(204).json({
        message: sanitizeDetails(message),
        status: 204,
        requestHttpMethod: req.method,
        requestUrl: req.originalUrl,
        data,
      });
    },
    badRequest400: (message, data, stack) => {
      return res.status(400).json({
        message: sanitizeDetails(message),
        status: 400,
        requestHttpMethod: req.method,
        requestUrl: req.originalUrl,
        data,
        stack: isDev ? stack : null,
      });
    },
    unauthorized401: (title, message, data, stack) => {
      return res.status(401).json({
        title,
        message: sanitizeDetails(message),
        status: 401,
        requestHttpMethod: req.method,
        requestUrl: req.originalUrl,
        data,
        stack: isDev ? stack : null,
      });
    },
    forbidden403: (title, message, data, stack) => {
      return res.status(403).json({
        title,
        message: sanitizeDetails(message),
        status: 403,
        requestHttpMethod: req.method,
        requestUrl: req.originalUrl,
        data,
        stack: isDev ? stack : null,
      });
    },
    notFound404: (title, message, data, stack) => {
      return res.status(404).json({
        title,
        message: sanitizeDetails(message),
        status: 404,
        requestHttpMethod: req.method,
        requestUrl: req.originalUrl,
        data,
        stack: isDev ? stack : null,
      });
    },
    methodNotAllowed405: (title, message, data, stack) => {
      return res.status(405).json({
        title,
        message: sanitizeDetails(message),
        status: 405,
        requestHttpMethod: req.method,
        requestUrl: req.originalUrl,
        data,
        stack: isDev ? stack : null,
      });
    },
    serverError500: (title, message, data, stack) => {
      return res.status(500).json({
        title,
        message: sanitizeDetails(message),
        status: 500,
        requestHttpMethod: req.method,
        requestUrl: req.originalUrl,
        data,
        stack: isDev ? stack : null,
      });
    },
    notImplemented501: (title, message, data, stack) => {
      return res.status(501).json({
        title,
        message: sanitizeDetails(message),
        status: 501,
        requestHttpMethod: req.method,
        requestUrl: req.originalUrl,
        data,
        stack: isDev ? stack : null,
      });
    },
  };
  next();
};
