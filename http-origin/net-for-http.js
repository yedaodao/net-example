const net = require('net');

let allBuffer = null;

const client = net.createConnection(3001, 'localhost', function() {
    console.log('connected to server!');
    client.write(
        'GET / HTTP/1.1\r\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.186 Safari/537.36\r\nAccept: text/html\r\nAccept-Language: zh-CN,zh;q=0.9\r\n\r\n'
    );
});

client.on('data', function(data) {
    console.log(data.toString());
    if (!allBuffer) {
        allBuffer = data;
    } else {
        allBuffer = Buffer.concat([allBuffer, data]);
    }
});

client.on('error', function(err) {
    console.log(err);
})

client.on('end', function() {
    console.log('connection end');
    console.log(allBuffer.toString());
});
