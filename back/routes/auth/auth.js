const express = require('express');
const myRouter = express.Router();

myRouter.post('/signup', function(req, res, next) {
  res.send('I am in POST signup');
});

module.exports = myRouter;
