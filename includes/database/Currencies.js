module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Currencies", {
    userID: { type: DataTypes.STRING, primaryKey: true },
    balance: { type: DataTypes.INTEGER, defaultValue: 0 },
    totalEarned: { type: DataTypes.INTEGER, defaultValue: 0 }
  });
};