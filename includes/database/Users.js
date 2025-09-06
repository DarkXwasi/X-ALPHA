module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Users", {
    userID: { type: DataTypes.STRING, primaryKey: true },
    name: DataTypes.STRING,
    coins: { type: DataTypes.INTEGER, defaultValue: 0 },
    level: { type: DataTypes.INTEGER, defaultValue: 1 },
    data: { type: DataTypes.JSON, defaultValue: {} }
  });
};