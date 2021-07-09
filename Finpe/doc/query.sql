CREATE SCHEMA `finpe` DEFAULT CHARACTER SET utf8 ;


-- MIGRATIONS: TRANSACTION:

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("transactions", {
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
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("transactions");
  },
};

-- MIGRATIONS: USERS:

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      level: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable("users");
  }
};
