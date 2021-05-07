
import  Model  from '../models/index';
import { Request, Response } from 'express';

import { MovieSchema } from '../schemas/movie.schema';


export class MovieController {

    findAll(req: Request, res: Response) {
        Model.Movie
            .findAndCountAll({
                include: [
                    { model: Model.Category, as: 'category' }, 
                ],
                where: {
                    status: 1
                }
            })
            .then(result => {
                res.status(200).json(result);
            })
            .catch(e => {
                res.status(500).json(e);
            });
    }

    findByTitle(req: Request, res: Response) {
        
    }

    show(req: Request, res: Response) {
        const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
        Model.Movie
            .findOne({
                where: { id }
            })
            .then(result => {
                res.status(201).json(result);                
            })
            .catch(e => {
                res.status(500).json(e);
            });
    }

    create(req: Request, res: Response) {
        const { error, value } = MovieSchema.validate(req.body);

        if (error === undefined) {
            value.status = 0;
            Model.Movie
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


    update(req: Request, res: Response) {
        const { error, value } = MovieSchema.validate(req.body);
        const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);

        if (error === undefined) {
            value.status = 0;
            Model.Movie
                .update(value, {
                    where: { id }
                })
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


    toggleAuthorize(req: Request, res: Response) {
        const id = isNaN(Number(req.params.id)) ? 0 : Number(req.params.id);
        Model.Movie
            .findOne({
                where: { id }
            })
            .then(result => {
                
                if(result.status === 0) {
                    res.status(201).json('filme foi para o cartaz');
                    return result.update({ status: 1 });
                } else {
                    res.status(201).json('filme retirado do cartaz');
                    return result.update({ status: 0 });
                }                
            })
            .catch(e => {
                res.status(500).json(e);
            });
    }


    delete(req: Request, res: Response) {

    }

}