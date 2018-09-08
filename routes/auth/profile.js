const express = require('express');
const router = express.Router();

const logger = require('../../modules/logger');
const userController = require('../../controllers/user');

router.get('/profile', (req, res) => {
  const params = req.body;
  params.decoded = req.decoded;

  userController.getUser(params)
    .then(([user, responseCode]) => { 
      res.status(responseCode)
        .json({
          success: true,
          result: user
        }); 
    }).catch(([err, responseCode]) => {
      res.status(responseCode);
      if (typeof(err) !== 'string') {
        logger.error('routes /users GET', err);
        err = 'Server side error';
      }
      res.json({
        success: false,
        message: err
      });
    });
});

// Update user profile
router.put('/profile', (req, res) => {
  const params = req.body;
  params.decoded = req.decoded;

  userController.updateUser(params)
    .then(([user, responseCode]) => { 
      res.status(responseCode)
        .json({
          success: true,
          result: user
        });
    }).catch(([err, responseCode]) => {
      res.status(responseCode);
      if (typeof(err) !== 'string') {
        logger.error('routes /users PUT', err);
        err = 'Server side error';
      }
      res.json({
        success: false,
        message: err
      });
    });
});

module.exports = router;
