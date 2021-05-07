import { Image } from '../models/image.model';
import { Request, Response } from 'express';

import { ImageSchema } from '../schemas/image.schema';

import * as ImageUtil from '../../config/file';

export class ImageController {

    findAll(req: Request, res: Response) {
        Image
            .findAndCountAll()
            .then(result => {
                res.status(200).json(result);
            })
            .catch(e => {
                res.status(500).json(e);
            });
    }


    create(req, res: Response) {

        let { error, value } = ImageSchema.validate(req.body);
        if (error === undefined) {

            if (!req.files) {
                res.status(400).json('file is needed');
                return;
            }

            let { type, hash, ok, msg } = ImageUtil.save(req.files, 'filetarget');
            if (!ok) {
                res.status(400).send(msg);
                return;
            }

            value.hash = hash;
            value.type = type;

            Image
                .create(value)
                .then(result => {
                    res.status(200).json(result);
                })
                .catch(e => {
                    res.status(500).json(e);
                });
        } else {
            res.status(500).json(error);
        }
    }


}