module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.NUMBER,
  });

  return User;
};
