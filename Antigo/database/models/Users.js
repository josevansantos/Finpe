module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      level: DataTypes.INTEGER,
    },
    {
      tableName: "users",
      timestamps: false,
    }
  );

  // User.associate = (models) => {
  //   User.hasMany(models.Transaction, {
  //     as: "transactions",
  //     foreignKey: "id_user",
  //   });
  // };

  return User;
};
