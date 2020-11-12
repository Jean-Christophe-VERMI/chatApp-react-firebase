const sequelize = require('sequelize');
const dbConnection = require('../database/dbConnection');

class Conversation extends sequelize.Model {

};

User.init({
  sender_id: sequelize.INTEGER,
  recipient_id: sequelize.INTEGER,
},{
  sequelize: dbConnection,
  tableName: "conversations",
  createdAt: "created_at",
  updatedAt: "updated_at"
});


module.exports = Conversation;