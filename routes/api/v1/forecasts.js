var express = require('express');
var router = express.Router();
var Forecast = require('../../../models').Forecast;

fetch('https://maps.googleapis.com/maps/api/geocode/json?address=denver&key=AIzaSyCmFzPokmvGKpiVJV-zFqqoK74Clzifbwg')
  .then(response => response.body)
  .catch(error => console.error({ response.status }));

fetch(`https://api.darksky.net/forecast/39ac8e23f50db38607e2ad728909f731/37.8267,-122.4233`,{
  method: 'get',
  headers: { 'Accept': 'application/json' }
})
  .then(response => response.json())
  .catch(error => console.error({ response.status}));
