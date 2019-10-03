var express = require('express');
var router = express.Router();
var Session = require('../../../models').User;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/", function(req, res, next) {
  Session.create({
          email: req.body.email,
          password: req.body.password,
    })
    .then(game => {
      res.setHeader("Content-Type", "application/json");
      res.status(201).send(JSON.stringify(game));
    })
    .catch(error => {
      res.setHeader("Content-Type", "application/json");
      res.status(500).send({ error });
    });
});

module.exports = router;
