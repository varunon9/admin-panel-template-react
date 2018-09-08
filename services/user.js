const bcrypt = require('bcrypt');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];

const models = require('../models');

module.exports = {

  createUser: async (user) => {
    try {
      user.password = 
          await bcrypt.hash(user.password, config.bcryptSaltRounds);
      const { dataValues } = await models.user.create(user);
      return dataValues;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (params) => {
    let where = {};
    if (params.id) {
      where.id = params.id;
    } else if (params.email) {
      where.email = params.email;
    } else if (params.mobile) {
      where.mobile = params.mobile;
    }

    const user = await models.user.findOne({
      where
    });

    if (!user) {
      throw ('No such user Exist');
    }

    try {
      // update password
      if (params.password) {
        params.password = 
            await bcrypt.hash(params.password, config.bcryptSaltRounds);
      }

      const { dataValues } =  await user.updateAttributes(params);
      return dataValues;
    } catch (error) {
      throw error;
    }
  }
};
