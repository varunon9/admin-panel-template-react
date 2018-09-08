const models = require('../../models');

module.exports = {

  doesSuchUserExist: (params) => {
    return new Promise((resolve) => {
      let where = {};
      if (params.id) {
        where.id = params.id;
      } else if (params.email) {
        where.email = params.email;
      } else if (params.mobile) {
        where.mobile = params.mobile;
      } else {
        return resolve(false);
      }
			
      models.user.findOne({ where }).then(user => {
        if (user) {
          return resolve(user);
        } else {
          return resolve(false);
        }
      });
    });
  }

};
