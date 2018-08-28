const express = require('express');
const router = express.Router();

const { verifyToken } = require('../../middlewares');

const userRoutes = require('./user');

router.use('/auth', verifyToken, userRoutes);

module.exports = router;
