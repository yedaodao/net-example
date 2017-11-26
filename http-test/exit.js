module.exports = function (server) {
    if (!server) {
        let err = new Error('Fatal error');
        console.log(err);
        process.exit(1);
    }
    console.log('Received SIGINT.  You press Ctrl+C');
    server.close(function () {
        // TODO
        console.log('do some clear works');
        process.exit(0);
    });
};
