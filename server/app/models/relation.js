const User = require('./user');
const Conversation = require('./conversation');
const Message = require('./message');

// pour éviter la boucle infernale des dépendances, je centralise mes associations ici


// user <> conversation


// Conversation <> Message

Conversation.hasMany(Message, {
  as: 'messages',
  foreignKey: 'conversation_id',
});

Message.belongsTo(Conversation, {
  as: 'conversations',
  foreignKey: 'conversation_id',
});


// ne pas oublier de réexporter les modèles mis à jour, sinon ils seront inaccessibles
module.exports = { User, Conversation, Message };