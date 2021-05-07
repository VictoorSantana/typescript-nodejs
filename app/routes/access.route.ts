

import express = require('express');
import * as auth from '../../config/auth';
import { AccessController } from '../controllers/access.controller';

export default class AccessRoute {

	constructor(express: express.Application) {
		let controller = new AccessController();

		express.get('/api/access/', auth.verify('listar access'), controller.findAll);
		express.post('/api/access/', auth.verify('adicionar access'), controller.create);
	}
}