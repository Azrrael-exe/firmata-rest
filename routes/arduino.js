var express = require('express');
var router = express.Router();

var Arduino = require('../arduino')

router.get('/config/:pin/:mode', function(req, res){
  var modes = ["INPUT", "OUTPUT", "ANALOG"];
  var mode = modes.indexOf(req.params.mode.toUpperCase());
  var pin = parseInt(req.params.pin);
  if((pin <= 13 && pin >0) && (mode != -1)){
    Arduino.pinMode(pin, mode);
    res.status = 200;
    res.send({
      message : "The pin " + pin + " was set as " + modes[mode]
    })
  }
  else {
    res.status = 500;
    res.send({
      err : "Invalid config!"
    })
  }
})

router.get('/write/:pin/:value', function(req, res, next){
  var value = parseInt(req.params.value);
  var pin = parseInt(req.params.pin);
  var type = null;
  if((pin <= 13 && pin >0) && (value < 256)){
    if(value > 1){
      type = "analog";
      Arduino.analogWrite(pin, value);
    }
    else {
      type = "digital";
      Arduino.digitalWrite(pin, value);
    }
    res.status = 200;
    res.send({
      message : "The pin " + pin + " as set to an " + type + " output with value " + value
    })
  }
  else {
    res.status = 500;
    res.send({
      err : "invalid config!"
    })
  }
})

router.get('/read/:pin', function(req, res, next) {
  var pin = req.params.pin
  var value = Arduino.pins[req.params.pin].value
  res.send({
    message : "the pin " + pin + " has a value of " + value
  })
});

module.exports = router;
