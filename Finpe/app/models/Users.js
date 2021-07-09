const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      level: DataTypes.INTEGER,
    }),
      {
        sequelize,
      };
  }
}

module.exports = User;

// module.exports = (sequelize, DataTypes) => {
//   const User = sequelize.define("Users", {
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     level: DataTypes.INTEGER,
//   });

//   return User;
// };
