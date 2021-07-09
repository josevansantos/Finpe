const Sequelize = require("sequelize");
const config = require("../config/config.json");

const { dialect, host, port, database, username, password } =
  config.development;

const sequelize = new Sequelize(database, username, password, {
  host,
  port,
  dialect,
});

let isConnected = false;

const connect = async () => {
  if (isConnected) {
    return sequelize;
  }

  try {
    await sequelize.authenticate();
    console.info("Connection has been established successfully.");
    isConnected = true;
    return sequelize;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

connect();

module.exports = {
  connect,
  sequelize,
};
