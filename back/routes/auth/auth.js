const express = require('express');
const myRouter = express.Router();
const connection = require('../../helpers/db');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

myRouter.post('/signup', function(req, res, next) {
  console.log(req.body);
  const newUser = {
    email: req.body.email || '',
    password: req.body.password || '',
    name: req.body.name || '',
    lastname: req.body.lastname || '',
  };
  connection.query('INSERT INTO users SET ?', newUser, function(error, results, fields) {
    if (error) res.status(402).send(error);
    else res.status(200).send('Registration Successful');
  });
});

module.exports = myRouter;
