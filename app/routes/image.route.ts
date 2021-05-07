// // import { ImageController } from '../controllers/image.controller';
// // import * as auth from '../../config/auth';

// module.exports = (app) => {

//     const image = new ImageController();
	
// 	app.get('/api/image/', auth.verify('listar image'), image.findAll);
//     app.post('/api/image/', auth.verify('adicionar image'), image.create);
	
// }




import express = require('express');
import * as auth from '../../config/auth';
import { ImageController } from '../controllers/image.controller';

export default class UserRoute {
	
	constructor(express: express.Application) {		
		let controller = new ImageController();

		express.get('/api/image/', auth.verify('listar image'), controller.findAll);
        express.post('/api/image/', auth.verify('adicionar image'), controller.create);
	}
}





