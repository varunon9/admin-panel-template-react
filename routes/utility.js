const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];

module.exports = {
  
  getToken: ({ mobile, name, id, email }) => {
    const expiresIn = config.tokenMaxAge; // 30 days (30 * 24 * 60 * 60)

    // create a token
    const token = jwt.sign({
      mobile,
      name,
      id,
      email
    }, config.superSecret, {
      expiresIn: expiresIn
    });

    return token;
  }
};
