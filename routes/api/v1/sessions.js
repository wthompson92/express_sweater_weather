var express = require('express');
var router = express.Router();
var crypto = require('crypto')
var User = require('../../../models').User;


router.post("/sessions", function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email })
  .then(user => {
    res.setHeader("Content-Type", "application/json");
    res.status(201).send(JSON.stringify(user.api_key));
  })
  .catch(user => {
    res.setHeader("Content-Type", "application/json");
    res.status(500).send({ user });
  });
});

module.exports = router;
