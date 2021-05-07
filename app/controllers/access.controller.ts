

import { Access } from '../models/access.model';
import { Request, Response } from 'express';

import { AccessSchema } from '../schemas/access.schema';



export class AccessController {

    findAll(req: Request, res: Response) {
        Access
        .findAndCountAll()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(e => {
            res.status(500).json(e);
        });
    }


    create(req: Request, res: Response) {
        const { error, value } = AccessSchema.validate(req.body);

        if (error === undefined) {            
            Access
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