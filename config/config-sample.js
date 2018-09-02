module.exports = {
  'development': {
    'username': process.env.DATABASE_USERNAME || 'root',
    'password': process.env.DATABASE_PASSWORD || '',
    'database': process.env.DATABSE_NAME || 'adminPanelTemplate',
    'host': process.env.DATABASE_HOST || 'localhost',
    'dialect': 'mysql',
    'superSecret': process.env.SECRET_STRING || 'SECRET',
    'tokenMaxAge': 30 * 24 * 60 * 60, // 30 days
    'tokenName': 'authToken',
    'bcryptSaltRounds': 2
  },
  'production': {
    'username': process.env.DATABASE_USERNAME || 'DATABASE_USERNAME',
    'password': process.env.DATABASE_PASSWORD || 'DATABASE_PASSWORD',
    'database': process.env.DATABSE_NAME || 'adminPanelTemplate',
    'host': process.env.DATABASE_HOST || 'localhost',
    'dialect': 'mysql',
    'superSecret': process.env.SECRET_STRING || 'SECRET',
    'tokenMaxAge': 30 * 24 * 60 * 60, // 30 days
    'tokenName': 'authToken',
    'bcryptSaltRounds': 2
  }
};
