
// import { UserController } from '../controllers/user.controller';
// import * as auth from '../../config/auth';

// module.exports = (app) => {

//     const user = new UserController();
	
// 	app.get('/api/user/', auth.verify(''), user.findAll);
// 	app.post('/api/auth/', user.login);
// 	app.get('/api/auth/me', auth.verify(''), user.me);
	
// }



import express = require('express');
import * as auth from '../../config/auth';
import { UserController } from '../controllers/user.controller';

export default class UserRoute {
	
	constructor(express: express.Application) {		
		let controller = new UserController();

		express.get('/api/user/', auth.verify(''), controller.findAll);
		
		express.get('/api/auth/me', auth.verify(''), controller.me);
		express.post('/api/auth/', controller.login);
	}
}




