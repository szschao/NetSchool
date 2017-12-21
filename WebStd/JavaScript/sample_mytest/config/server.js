const express = require('express');

const app = express();
app.use(express.static(process.cwd()));

// Server handle
let expressServer = null;

//for integration test
const server = {

    get app() {
        return app;
    },

    get handle() {
        return expressServer;
    },

    start: function () {
        if (expressServer === null) {
            expressServer = app.listen(3000, function () {
                console.log('onPrepare: app is listening at port 3000');
            });
        }
    },

    stop: function () {
        if (expressServer) {
            expressServer.close();
            expressServer = null;
            console.log('onComplete: Server stopped');
        }
    }
};

module.exports = server;

