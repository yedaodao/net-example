const http = require('http');

const httpCallback = require('../support/httpCallback');
const serverEventHandler = require('../support/serverEventHandler');

const server = http.createServer(httpCallback);
serverEventHandler(server);
server.listen(3000);
console.log('The server started at http://localhost:' + 3000);

