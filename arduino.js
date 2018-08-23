var Board = require('firmata')
var arduino = new Board('/dev/ttyACM0', {
  samplingInterval: 30
});

var io = require('./io')


arduino.on('ready', function(){
  console.log("Arduino connected");

  io.on('connect', function(socket){

    socket.emit('board', {
      firmware: arduino.firmware,
      settings: arduino.settings
    })

    setEmitter = function(pin){
      arduino.digitalRead(pin, function(val){
        socket.emit('change', {
          pin: pin,
          value : val
        })
      })
    }

    for(var i=2; i<=13; i++){
      setEmitter(i);
    }
  })

})

module.exports = arduino;
