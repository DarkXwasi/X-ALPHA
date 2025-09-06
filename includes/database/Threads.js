module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Threads", {
    threadID: { type: DataTypes.STRING, primaryKey: true },
    threadName: DataTypes.STRING,
    prefix: { type: DataTypes.STRING, defaultValue: "$" },
    settings: { type: DataTypes.JSON, defaultValue: {} }
  });
};