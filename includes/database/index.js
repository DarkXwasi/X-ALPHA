const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database/data.sqlite",
  logging: false
});

const Threads = require("./Threads")(sequelize, DataTypes);
const Users = require("./Users")(sequelize, DataTypes);
const Currencies = require("./Currencies")(sequelize, DataTypes);
const Settings = require("./Settings")(sequelize, DataTypes);

sequelize.sync();

module.exports = {
  sequelize,
  Threads,
  Users,
  Currencies,
  Settings
};