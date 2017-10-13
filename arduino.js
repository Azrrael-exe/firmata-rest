var Board = require('firmata')
var arduino = new Board('COM3');

arduino.on('ready', function(){
  console.log("Arduino connected");
})

module.exports = arduino;
