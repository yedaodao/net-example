

const _ = require('lodash');
const ip1 = '192.168.0.5';


function ipToB(ipStr) {
    const arrs = ipStr.split('.');
    if(!arrs || arrs.length !== 4) {
        throw new Error('Invalid ip');
    }
    return arrs.map(function(seg){
        // TODO return b
        return _.padStart(parseInt(seg).toString(2), 8, 0);
    }).join(' ');
}
