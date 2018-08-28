const express = require('express');
const router = express.Router();

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];

const { requireParameters } = require('../middlewares');
const logger = require('../modules/logger');
const { getToken } = require('./utility');
const userController = require('../controllers/user');

router.get('/', (req, res ) => {
  res.render('index');
});

const requiredGoogleSigninParams = 
    requireParameters(['idToken']);
router.post('/google-token-signin', requiredGoogleSigninParams, (req, res) => {
  const params = req.body;
  userController.loginUsingGoogle(params)
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
        logger.error('routes /users/google-token-signin', err);
        err = 'Server side error';
      }
      res.json({
        success: false,
        message: err
      });
    });
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
        logger.error('routes /users/login', err);
        err = 'Server side error';
      }
      res.json({
        success: false,
        message: err
      });
    });
});


const requiredSignupParams = requireParameters([
  'firstName', 'email', 'password'
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
        logger.error('routes /users/signup', err);
        err = 'Server side error';
      }
      res.json({
        success: false,
        message: err
      });
    });
});

module.exports = router;
