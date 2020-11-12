const express = require('express');
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

//Controllers
const userController = require('./controllers/user');
//const conversationController = require('./controllers/conversation');

const router = express.Router();


// route gestion des users SDK Firebase
router.get('/getAllUsers', cors(corsOptions), userController.getAllUsers);


module.exports = router;