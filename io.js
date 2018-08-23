var io = require('socket.io')();
io.serveClient(false);

// io.on('connection', function (socket) {
//   console.log("Client with id" + socket.id + " is Connected.")

//   socket.on('disconnect', function () {
//     console.log({
//       'user disconnected': socket.id
//     });
//   });
// });

module.exports = io