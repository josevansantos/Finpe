const { Model, DataTypes } = require("sequelize");

class Transaction extends Model {
  static init(sequelize) {
    super.init({
      description: DataTypes.STRING,
      value: DataTypes.FLOAT,
      type: DataTypes.STRING,
      date: DataTypes.DATE,
    }),
      {
        sequelize,
      };
  }
}

module.exports = Transaction;

// module.exports = (sequelize, DataTypes) => {
//   const Transactions = sequelize.define("Transactions", {
//     description: DataTypes.STRING,
//     value: DataTypes.FLOAT,
//     type: DataTypes.STRING,
//     date: DataTypes.DATE,
//   });

//   // Transactions.associate = models => {
//   //   Transactions.belongsTo(models.Users, {
//   //     as: 'user',
//   //     foreignKey: 'id_user'
//   //   })
//   // }

//   return Transactions;
// };
