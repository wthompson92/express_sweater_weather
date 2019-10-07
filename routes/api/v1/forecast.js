var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
var express = require('express');
var router = express.Router();
require('dotenv').config();

var darkskyApiKey = process.env.DARKSKY_API_KEY
var googleApiKey = process.env.GOOGLE_API_KEY

router.get('/', function(request, response, next) {
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${request.query.address}&key=${googleApiKey}`)
    .then(response => {return response.json()})
    .then(result => {
      coordinates = {
        location: request.query.address,
        lat: result['results'][0]['geometry']['location']['lat'],
        lng: result['results'][0]['geometry']['location']['lng'] }
        return (coordinates)})

        .then(coordinates => fetch(`https://api.darksky.net/forecast/${darkskyApiKey}/${coordinates['lat']},${coordinates['lng']}`))

          .then(response => response.json())
          console.log(response)
        });


        module.exports = router;
