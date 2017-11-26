const crypto = require('crypto');


const maxCount = 1000;

/**
 *
 * @param req
 * @param res
 */
module.exports = function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
};
