var express = require('express');
var router = express.Router();

var Arduino = require('../arduino')

router.get('/set/:pin/:mode', function(req, res, next){
  var mode = req.params.mode
  mode_value = 0x00
  if (mode == 'output'){
    mode_value = 0x01;
  }
  var pin = req.params.pin
  if(mode == 'input'){
    Arduino.digitalRead(pin, function(value){
      ;;
    })
  }
  Arduino.pinMode(pin, mode_value)
  res.send({
    message : "Pin Number " + pin +" was set as " + mode
  })
})

router.get('/:pin', function(req, res, next) {
  res.send({
    value : Arduino.pins[req.params.pin].value
  })
});


module.exports = router;
