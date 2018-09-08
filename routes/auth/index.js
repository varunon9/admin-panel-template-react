const express = require('express');
const router = express.Router();

const { verifyToken } = require('../../middlewares');

const profileRoutes = require('./profile');

router.use('/auth', verifyToken, profileRoutes);

module.exports = router;
