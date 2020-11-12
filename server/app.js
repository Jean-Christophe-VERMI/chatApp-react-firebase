const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const admin = require('firebase-admin');
const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const PORT = process.env.PORT = 5000;
const router = require('./app/router');
const path = require('path');
const jwt = require('./app/_helpers/jwt');
const errorHandler = require('./app/_helpers/error-handler');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const multer = require('multer');
const bodyParser = multer();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL,
});

app.use(cors('*'));

app.use(express.urlencoded({
  extended: false
}));

app.use(bodyParser.none());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/client/build/index.html')));

// use JWT auth to secure the api
app.use(jwt());
app.use(router);

app.use(errorHandler);


// socket io
const http = require('http');
const server = http.createServer(app);
const socketio = require('socket.io');
const io = socketio(server);

io.on('connection', (socket) => {
  require('./app/socket/index')(socket);

});


server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));