const models = require('../../models');

module.exports = {

  doesSuchUserExist: (email) => {
    return new Promise((resolve) => {
      const where = { email };
			
      models.user.findOne({ where }).then(user => {
        if (user) {
          resolve(user);
        } else {
          resolve(false);
        }
      });
    });
  }

};
