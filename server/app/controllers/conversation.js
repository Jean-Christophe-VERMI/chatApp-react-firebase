const { User, Conversation, Message } = require('../models/relations');
const sequelize = require('sequelize');
const Op = sequelize.Op;

const conversationController = {

  // route : POST CREATE CONVERSATION /conversation/:conversationName
  createConversation: async (req, res) => {
    const {senderId, recipientId} = req.body;

    try {

      const matchConversation = await Conversation.findOne({
        where : {
          sender_id: senderId,
          recipient_id: recipientId,
        },
        include: [{
          association: 'messages',
        }],
      });

      if(matchConversation) {
        res.status(200).json(matchConveration);

      } else {
        const conversation = new Conversation();
        conversation.sender_id = senderId;
        conversation.recipient_id = recipientId;
    
        await conversation.save();
        res.status(200).json(conversation);
      }

    } catch (error) {
      res.status(500).json({msg: 'erreur conversation ici'});
      console.error(error);
    }

  },

  // Route : GET CONVERSATION /conversation/:conversationName
  getConversation: async (req, res) => {

    /*
    try {

      const {email, username, picture} = req.body;
      
      const matchUser = await User.findOne({
        where : {
          email: email
        }
      });

      if(matchUser) {
        res.status(200).json(matchUser);

      } else {
        const userOnline = new User();
        userOnline.email = email;
        userOnline.username = username;
        userOnline.picture = picture;
        userOnline.isLogged = true;
    
        await userOnline.save();
        res.status(200).json(userOnline);
      }

    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    };
    */
  },

  // Route : POST MESSAGE /conversation/:conversationName/message
  postMessage: async (req, res) => {

    try {

      const {senderId, recipientId, text} = req.body;

      const message = new Message();
      message.sender_id = senderId;
      message.recipientId = recipientId;
      message.text = text;
  
      await message.save();
      res.status(200).json({message: "nouveau message enregistré"});

    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    };
  },

};

module.exports = conversationController;