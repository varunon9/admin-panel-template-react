const bcrypt = require('bcrypt');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];

const models = require('../models');

module.exports = {

  createUser: async user => {
    user.password = 
        await bcrypt.hash(user.password, config.bcryptSaltRounds);
    const { dataValues } = await models.user.create(user);
    return dataValues;
  },

  updateUser: async params => {
    const user = await models.user.findOne({
      where: {
        id: params.id
      }
    });

    if (!user) {
      throw ('No such user Exist');
    }

    // update password
    if (params.password) {
      params.password = 
          await bcrypt.hash(params.password, config.bcryptSaltRounds);
    }

    const { dataValues } =  await user.updateAttributes(params);
    return dataValues;
  },

  getUserById: async id => {
    const user = await models.user.findOne({
      where: {
        id
      }
    });

    return user ? user.dataValues : null;
  }
};
