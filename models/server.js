
const express = require('express')
const cors = require('cors');
const { dbConnection } = require('../database/config');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        //Conectar a DB
        this.conectarDB();

        //Midlewares 
        this.middlewares();

        //Rutas de mi aplicación
        this.routes();

    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {

        //CORSE
        this.app.use(cors())
        //Parseo y lectura de body
        this.app.use(express.json());
        //Directorio publico
        this.app.use(express.static('public'));

    }

    routes() {
        this.app.use(this.usuariosPath  , require('../routes/usuarios'))

    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Servidor creado en puerto', this.port)
        })
    }

}

module.exports = Server;