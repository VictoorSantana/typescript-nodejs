// import { MovieController } from '../controllerscontroller.controller';
// import * as auth from '../../config/auth';

// module.exports = (app) => {

//     const movie = new MovieController();

//     app.get('/api/movie/', auth.verify(''), movie.findAll);
//     app.get('/api/movie/:id', auth.verify(''), movie.show);

//     app.post('/api/movie/', auth.verify(''), movie.create);
//     app.post('/api/movie/authorize/:id', auth.verify('autorizar movie'), movie.toggleAuthorize);

//     app.put('/api/movie/:id', auth.verify(''), movie.update);

// }



import express = require('express');
import * as auth from '../../config/auth';
import { MovieController } from '../controllers/movie.controller';

export default class MovieRoute {

    constructor(express: express.Application) {
        let controller = new MovieController();

        express.get('/api/movie/', auth.verify(''), controller.findAll);
        express.get('/api/movie/:id', auth.verify(''), controller.show);

        express.post('/api/movie/', auth.verify(''), controller.create);
        express.post('/api/movie/authorize/:id', auth.verify('autorizar movie'), controller.toggleAuthorize);

        express.put('/api/movie/:id', auth.verify(''), controller.update);
    }
}





