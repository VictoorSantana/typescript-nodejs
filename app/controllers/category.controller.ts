

import { Category } from '../models/category.model';
import { Request, Response } from 'express';

import { CategorySchema } from '../schemas/category.schema';


export class CategoryController {

    findAll(req: Request, res: Response) {
        Category
            .findAndCountAll()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(e => {
                res.status(500).json(e);
            });
    }

    create(req: Request, res: Response) {
        const { error, value } = CategorySchema.validate(req.body);

        if (error === undefined) {
            Category
                .create(value)
                .then(result => {
                    res.status(201).json(result);
                })
                .catch(e => {
                    res.status(500).json(e);
                });
        } else {
            res.status(500).json(error);
        }
    }



}