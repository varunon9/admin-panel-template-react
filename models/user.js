'use strict';

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    mobile: { 
      type: DataTypes.STRING,
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'male'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    profilePic: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    timestamp: true
  });

  /*User.associate = function(models) {
  };*/  
	
  return User;
};
