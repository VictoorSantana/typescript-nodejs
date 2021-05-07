



import express = require('express');
import * as auth from '../../config/auth';
import { CategoryController } from '../controllers/category.controller';

export default class CategoryRoute {
	
	constructor(express: express.Application) {		
		let controller = new CategoryController();

		express.get('/api/category/', auth.verify(''), controller.findAll);
        express.post('/api/category/', auth.verify(''), controller.create);
	}
}

