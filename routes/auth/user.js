const express = require('express');
const router = express.Router();

const logger = require('../modules/logger');
const { verifyToken } = require('../middlewares');
const userController = require('../controllers/user');

router.get('/:id', (req, res) => {
  userController.getUserById(req.params.id)
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
router.put('/:id', verifyToken, (req, res) => {
  const params = {
    ...req.body,
    id: parseInt(req.params.id),
    decodedId: req.decoded.id,
    email: req.decoded.email
  };

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
