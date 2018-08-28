module.exports = {
  'development': {
    'username': process.env.DATABASE_USERNAME || 'root',
    'password': process.env.DATABASE_PASSWORD || 'L1fe_c00l',
    'database': process.env.DATABSE_NAME || 'adminPanelTemplate',
    'host': process.env.DATABASE_HOST || 'localhost',
    'dialect': 'mysql',
    'superSecret': process.env.SECRET_STRING || 'SECRET',
    'tokenMaxAge': 30 * 24 * 60 * 60, // 30 days
    'tokenName': 'authToken',
    'googleSigninClientId': '283217089830-u2vrggeku555vel7m4rs3akk4lop045r.apps.googleusercontent.com',
    'bcryptSaltRounds': 2
  },
  'production': {
    'username': process.env.DATABASE_USERNAME || 'root',
    'password': process.env.DATABASE_PASSWORD || 'L1fe_c00l',
    'database': process.env.DATABSE_NAME || 'adminPanelTemplate',
    'host': process.env.DATABASE_HOST || 'localhost',
    'dialect': 'mysql',
    'superSecret': process.env.SECRET_STRING || 'secrt5454tet',
    'tokenMaxAge': 30 * 24 * 60 * 60, // 30 days
    'tokenName': 'authToken',
    'googleSigninClientId': '283217089830-u2vrggeku555vel7m4rs3akk4lop045r.apps.googleusercontent.com',
    'bcryptSaltRounds': 2
  }
};

