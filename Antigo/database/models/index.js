const { sequelize } = require('../index');
const { DataTypes } = require('sequelize')
const UserModel = require('./Users')(sequelize, DataTypes);
const TransactionModel = require('./Transactions')(sequelize, DataTypes);

module.exports = {
  UserModel,
  TransactionModel
}
