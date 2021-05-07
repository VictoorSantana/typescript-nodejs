
import express = require('express');
import cors = require('cors'); //npm i cors
import bodyParser = require('body-parser');
import path = require('path');
import fileUpload = require('express-fileupload');
import conn from './config/connection';


import AccessRoute from './app/routes/access.route';
import CategoryRoute from './app/routes/category.route';
import UserRoute from './app/routes/user.route';
import MovieRoute from './app/routes/movie.route';
import ImageRoute from './app/routes/image.route';

class App {
    public express: express.Application;

    constructor() {
        this.express = express();

        this.middlewares();
        this.database();
        this.route();
    }

    private middlewares ():void {
        this.express.use(fileUpload({
            createParentPath: true
        }));
        
        this.express.use(express.static(path.join(__dirname, 'public')));
        this.express.use(cors());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(bodyParser.json());
    }

    private database(): void {
        conn
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
    }

    private route():void {
        new AccessRoute(this.express);
        new CategoryRoute(this.express);
        new UserRoute(this.express);
        new MovieRoute(this.express);
        new ImageRoute(this.express);
    }
    
}



export default new App().express;