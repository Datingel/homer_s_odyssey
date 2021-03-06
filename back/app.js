const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const authRouter = require('./routes/auth/auth.js');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Welcome strolling seeker of knowlegde');
});

app.use('/auth', authRouter);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 402;
  next(err);
});

let server = app.listen(process.env.PORT || 5000, function() {
  console.log('Listening on port ' + server.address().port);
});
