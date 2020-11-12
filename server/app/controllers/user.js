const User = require('../models/user');
const axios = require('axios');
var admin = require('firebase-admin');


const userController = {

  // route : GET USERS FROM AUTH0
  getAllUsers: async (req, res) => {

    try {
      const users = await admin.auth().listUsers(1000)
      console.log("succes fetching users list");
      res.status(200).json(users.users);
    } catch (error) {
      res.status(500).json(error);
    }

  },

  /* // Route POST : /isLogged
  isLogged: async (req, res) => {

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
  },

  // Route DELETE : /isLogout
  isLogout: async (req, res) => {

    try {

      const email = req.body.email;
      
      const user = await User.findOne({
        where : {
          email: email
        }
      });

      if(user) {
        await user.destroy();
        res.status(200).json({msg : 'utilisateur déconnecté'});
        console.log('utilisateur déconnecté et supprimé de la BDD');
        
      } else {
        res.status(400).json({msg : 'Erreur rencontrée'});
      }

    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    };
  },

  // route : GET ONLINE USERS FROM DB /online-users
  getOnlineUsers: async (req, res) => {

    try {

      const onlineUsersObject = await User.findAll();
      res.json(onlineUsersObject);

    } catch (error) {
      res.status(500).json(error);
    }

  }, */

};

module.exports = userController;