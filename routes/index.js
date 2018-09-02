const express = require('express');
const router = express.Router();

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];

const { requireParameters } = require('../middlewares');
const logger = require('../modules/logger');
const { getToken } = require('./utility');
const userController = require('../controllers/user');

// Single Page app, all routes will be handled by react Router
router.get('/*', (req, res ) => {
  res.render('index');
});

router.post('/login', requireParameters(['email', 'password']), (req, res) => {
  const params = req.body;
  userController.login(params)
    .then(([user, responseCode]) => { 
      res.status(responseCode);
      const token = getToken(user);
      const successObject = {
        success: true,
        result: user
      };
      successObject[config.tokenName] = token;
      successObject.expiresIn = config.tokenMaxAge;
      res.json(successObject);
    }).catch(([err, responseCode]) => {
      res.status(responseCode);
      if (typeof(err) !== 'string') {
        logger.error('routes /login', err);
        err = 'Server side error';
      }
      res.json({
        success: false,
        message: err
      });
    });
});


const requiredSignupParams = requireParameters([
  'firstName', 'lastName', 'mobile', 'email', 'password'
]);
router.post('/signup', requiredSignupParams, (req, res) => {
  const params = req.body;
  userController.signup(params)
    .then(([user, responseCode]) => { 
      res.status(responseCode);
      const token = getToken(user);
      const successObject = {
        success: true,
        result: user
      };
      successObject[config.tokenName] = token;
      successObject.expiresIn = config.tokenMaxAge;
      res.json(successObject);
    }).catch(([err, responseCode]) => {
      res.status(responseCode);
      if (typeof(err) !== 'string') {
        logger.error('routes /signup', err);
        err = 'Server side error';
      }
      res.json({
        success: false,
        message: err
      });
    });
});

module.exports = router;
