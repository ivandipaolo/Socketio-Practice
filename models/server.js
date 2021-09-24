const express = require('express');
const cors = require('cors');
const { socketController } = require('../sockets/controller');
class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        //Importamos socket.io
        this.server = require('http').createServer(this.app);
        //Toda la info de los clientes conectados:
        this.io = require('socket.io')(this.server);

        this.paths = {
        }
        this.middlewares();
        this.routes();
        this.sockets();
    }

    middlewares() {
        this.app.use(cors())

        this.app.use(express.static('public'));

        this.app.use(express.json());
    }

    routes() {
        // this.app.use(this.paths.auth, require('../routes/auth'));
    }

    sockets() {
        this.io.on('connection', socketController)
    }

    listen() {
        //En vez de levantar el this.app vamos a levantar el this.server de socket.io
        this.server.listen(this.port, (() => {
            console.log('Corriendo en el 8080')
        }))
    }


}

module.exports = Server;