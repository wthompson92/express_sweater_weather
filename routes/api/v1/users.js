var express = require('express');
var router = express.Router();
var user = require('../../../models').User;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function validateUser(user){
  const validEmail = typeof user.email == 'string' &&
                      user.email.trim() != '';
  const validPassword = typeof user.password == 'string' &&
                      user.email.trim() != '';
  return validUser && validPassword;
}


router.post("/", function(req, res, next) {
  if (validateUser(req.body))
  User.create({
          email: req.body.email,
          password: req.body.password,
    })
    .then(user => {
      res.setHeader("Content-Type", "application/json");
      res.status(201).send(JSON.stringify(user));
    })
    .catch(user => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({ user });
    });
});

module.exports = router;
