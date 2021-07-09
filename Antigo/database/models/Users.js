module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    level: DataTypes.INTEGER
  },
  {
    tableName: "users",
    timestamps: false,
  }
  );

  User.associate = models => {
    User.hasMany(models.Transaction, {
      as: 'transactions',
      foreignKey: 'id_user'
    })
  }

  return User;
}
