'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    static associate(models) {
      user.hasMany(models.TransactionModel, {
        foreignKey: 'userId',
        as: 'transactions',
      });
    }
  }
  user.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      password: DataTypes.STRING,
      isAdmin: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'UserModel',
      tableName: 'users',
    }
  );
  return user;
};
