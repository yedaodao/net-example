// global vars
const processes = [1, 2, 3, 4];

let mark = 0;

function loadbalancer(req) {
    handleProcess(mark, req);
    mark = (mark + 1) % processes.length;
}

function handleProcess(mark, req) {
    console.log('The request ' + JSON.stringify(req) + ' is handled by ' + processes[mark]);
}

let n = 10;
while (n > 0) {
    loadbalancer({
        reqId: n--
    });
}