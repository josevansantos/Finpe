module.exports = (sequelize, DataTypes) => {
  const Transactions = sequelize.define(
    "Transactions",
    {
      description: DataTypes.STRING,
      value: DataTypes.FLOAT,
      type: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      tableName: "transactions",
      timestamps: false,
    }
  );

  // Transactions.associate = models => {
  //   Transactions.belongsTo(models.Users, {
  //     as: 'user',
  //     foreignKey: 'id_user'
  //   })
  // }

  return Transactions;
};
