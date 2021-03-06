var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
var express = require('express');
var router = express.Router();
var users = require('../../../models').User
require('dotenv').config();

var darkskyApiKey = process.env.DARKSKY_API_KEY
var googleApiKey = process.env.GOOGLE_API_KEY

router.get('/', function(req, res, next) {
  var payload;
  users.findOne({where: {api_key: req.body.api_key}})
  .then(user => {
    if (user) {
      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.address}&key=${googleApiKey}`)
        .then(res => {return res.json()})
        .then(result => {
          coordinates = {
            lat: result['results'][0]['geometry']['location']['lat'],
            lng: result['results'][0]['geometry']['location']['lng'] }
            return (coordinates)})

            .then (coordinates => fetch(`https://api.darksky.net/forecast/${darkskyApiKey}/${coordinates['lat']},${coordinates['lng']}`))
              .then(response => response.json())
              .then(response => {
                forecast = {
                  currently: response.currently,
                  hourly: response.hourly,
                  daily: response.daily
                }
                res.status(200).send(forecast)
              })
            }
            else {
              payload = {
                error: "API key is not valid",
                status: 401
              }
              res.status(401).send(payload)
            }
          })
        });

        module.exports = router;
