const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];

const logger = require('../modules/logger');

const statusCode = require('../constants/statusCode');

module.exports = {

  logRequest: function(req, res, next) {
    const ipAddress =
        (req.headers['x-forwarded-for'] 
            && req.headers['x-forwarded-for'].split(',').pop())
        || req.connection.remoteAddress
        || req.socket.remoteAddress
        || req.connection.socket.remoteAddress;

    const url = req.originalUrl;
    const body = req.body;

    logger.info('IPAddress: ' + ipAddress);
    logger.info('Request Method: ' + req.method);
    logger.info('Request Url: ' + url);
    
    if (env === 'development') {
      logger.info('Request Body: ', body);
    }

    next();
  },

  verifyToken: function(req, res, next) {
    const tokenName = config.tokenName;
		
    // get token from custom-header
    const token = req.header(tokenName);
		
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, config.superSecret, (err, decoded) => {      
        if (err) {
          res.status(statusCode.UNAUTHORIZED)
            .json({
              success: false,
              message: 'Failed to authenticate'
            });    
        } else {

          // if everything is good, save to request for use in other routes
          req.decoded = decoded; 
          next();
        }
      });
    } else {
      res.status(statusCode.UNAUTHORIZED);
      res.json({
        success: false,
        message: 'Not Authorized'
      });
    }
  },

  requireParameters: function(paramList) {
    return function(req, res, next) {
      const { body, query } = req;

      const missing = {};

      paramList.forEach(param => {
        if (!body.hasOwnProperty(param) && !query.hasOwnProperty(param)) {
          missing[param] = `${param} is required`;
        }
      });

      if (Object.keys(missing).length !== 0) {
        return res.status(statusCode.BAD_REQUEST).json({
          success: false,
          message: 'missing params',
          errors: missing
        });
      }

      return next();
    };
  }
};
