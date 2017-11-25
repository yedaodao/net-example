/**
 *
 * @param req
 * @param res
 */
module.exports = function (req, res) {
    let body = 'Hello World';
    res.writeHead(200, {
        'Content-Length': Buffer.byteLength(body),
        'Content-Type': 'text/plain'
    });
    res.write(body);
    res.end('ok');
};
