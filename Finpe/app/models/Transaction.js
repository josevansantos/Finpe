const { Model, DataTypes } = require("sequelize");

class Transaction extends Model {
  static init(sequelize) {
    super.init({
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      value: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      id_user: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
      {
        sequelize,
        tableName: "transactions",
        timesTamps: true,
      };
  }
}

module.exports = Transaction;
