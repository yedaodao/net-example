module.exports = function (server) {
    server.on('connect', function (request, socket, head) {
        let address = socket.address();
        console.log('Client ' + address.address + ' is connecting, the port is ' + address.port);
    });
    server.on('connection', function (socket) {
        let address = socket.address();
        console.log('Client ' + address.address + ' is connected');
    });
    server.on('close', function () {
        console.log('The server closes');
    });
};
