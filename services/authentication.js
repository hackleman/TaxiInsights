const path = require('path');
const express = require('express');
const cors = require('cors');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('../config/default');
const users = require('../routes/users');

let server;

function initialize() {

  return new Promise((resolve, reject) => {

    mongoose.connect(config.get('MongoURI'), {useNewUrlParser: true});

    // Connect to Mongoose
    mongoose.connection.on('connected', () => {
      console.log('Connected to MongoDB');
    });
    mongoose.connection.on('error', (err) => {
      console.log('Database error: '+err);
    });

    const app = express();

    server = http.createServer(app);

    const port = 5000;

    app.use(cors());

    app.use(bodyParser.json());

    app.use(passport.initialize());
    app.use(passport.session());

    require('../config/passport.js')(passport);

    app.use('/users', users);

    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
    });


    // Default Database Startup message after Get '/'
    app.get('/', async (req, res) => {
        res.send('Invalid Endpoint');
    });

    app.listen(port, () => {
      console.log('Auth server listening on localhost: ' + port);
    });
  });
}

function close() {

  return new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });
}

module.exports.close = close;
module.exports.initialize = initialize;
