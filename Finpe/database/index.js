const Sequelize = require("sequelize");
const config = require("../config/database");

const Transaction = require("../app/models/Transactions");
const User = require("../app/models/Users");

// Fazendo a conexão com o banco de dados
const connection = new Sequelize(config);

Transaction.init(connection);
User.init(connection);

module.exports = connection;
