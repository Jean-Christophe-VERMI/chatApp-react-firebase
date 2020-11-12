const sequelize = require('sequelize');
const dbConnection = require('../database/dbConnection');

class User extends sequelize.Model {

  getEmail() {
    return this.email;
  };

  getUsername() {
    return this.username;
  };

};

User.init({
  email: sequelize.STRING,
  username: sequelize.STRING,
  picture: sequelize.TEXT,
  isLogged: { type: sequelize.BOOLEAN, allowNull: false, defaultValue: false },
},{
  sequelize: dbConnection,
  tableName: "users",
  createdAt: "created_at",
  updatedAt: "updated_at"
});


module.exports = User;
