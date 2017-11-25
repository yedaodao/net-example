const cluster = require('cluster');
const http = require('http');
const numCPUS = require('os').cpus().length;

const httpCallback = require('../support/httpCallback');
const serverEventHandler = require('../support/serverEventHandler');

// none cluster

if (cluster.isMaster) {
    console.log('The master ' + process.pid + ' process start...');

    // fork process
    for (let i = 0; i < numCPUS; i++) {
        let worker = cluster.fork();
        worker.on('listening', function (address) {
            console.log('A work is now connected to ' + address.address + ':' + address.port);
        });
    }
    cluster.on('exit', function (work, code, signal) {
        console.log('worker process ' + work.process.pid + ' is existed.');
    });
    cluster.on('disconnect', function (work) {
        console.log('work ' + work.id + ' is disconnected');
    });
} else {
    const server = http.createServer(httpCallback);
    serverEventHandler(server);
    server.listen(3000);
    console.log('The server started at http://localhost:' + 3000);
}

