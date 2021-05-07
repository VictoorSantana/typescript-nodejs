require('dotenv/config');
import express = require('express');
import cors = require('cors'); //npm i cors
import bodyParser = require('body-parser');
import path = require('path');
import fileUpload = require('express-fileupload');

const app: express.Application = express();
import conn from './config/connection';


conn
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

app.use(fileUpload({
    createParentPath: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./app/routes/user.route')(app);
require('./app/routes/movie.route')(app);
require('./app/routes/access.route')(app);
require('./app/routes/category.route')(app);
require('./app/routes/image.route')(app);

app.listen(process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000, function () {
    console.log(`App is listening on port ${process.env.SERVER_PORT ? process.env.SERVER_PORT : 5000}!`);
});