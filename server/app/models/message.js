const sequelize = require('sequelize');
const dbConnection = require('../database/dbConnection');

class Message extends sequelize.Model {

};

User.init({
  sender_id: sequelize.INTEGER,
  recipient_id: sequelize.INTEGER,
  text: sequelize.TEXT,
},{
  sequelize: dbConnection,
  tableName: "messages",
  createdAt: "created_at",
  updatedAt: "updated_at"
});


module.exports = Message;