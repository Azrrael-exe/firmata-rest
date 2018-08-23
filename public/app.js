var app = angular.module("rt-arduino", ['btford.socket-io'])

app.factory('socket', function (socketFactory) {
  var myIoSocket = io.connect();
  mySocket = socketFactory({
    ioSocket: myIoSocket
  });
  return mySocket;
});

app.controller("report-controller", function($scope, socket) {

  $scope.changes = []

  socket.on('data', function(data){
    $scope.data = data
  })
  socket.on('board', function(data){
    $scope.firmware = data.firmware.name;
  })
  socket.on('change', function(data){
    data['time'] = Date.now()
    $scope.changes.push(data)
  })
})