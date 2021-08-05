'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {
    static associate(models) {
      transactions.belongsTo(models.UserModel, {
        foreignKey: 'userId',
        as: 'user',
      });
    }
  }
  transactions.init(
    {
      date: DataTypes.DATE,
      description: DataTypes.STRING,
      value: DataTypes.FLOAT,
      type: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'TransactionModel',
      tableName: 'transactions',
    }
  );
  return transactions;
};
