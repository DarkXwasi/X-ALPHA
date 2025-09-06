module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Settings", {
    threadID: { type: DataTypes.STRING, primaryKey: true },
    nsfw: { type: DataTypes.BOOLEAN, defaultValue: false },
    autoRemove: { type: DataTypes.BOOLEAN, defaultValue: false },
    prefix: { type: DataTypes.STRING, defaultValue: "$" }
  });
};