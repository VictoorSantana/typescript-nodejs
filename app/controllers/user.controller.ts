
import { User } from '../models/user.model';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export class UserController {
    
    findAll(req: Request, res: Response) {
        User
        .findAndCountAll()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(e => {
            res.status(500).json(e);
        });        
    }

    me(req: Request, res: Response) {        
        User
        .findAll({
            attributes: ['id', 'email', 'name'],
            where: { id: res.locals.user }
        })
        .then(result => {
            if(result.length > 0) {
                res.status(200).json(result[0]);
            } else {
                res.status(401).json('Erro na chave de autenticação');
            }            
        })
        .catch(e => {
            console.log(e);
            res.status(500).json(e);
        });        
    }

    login(req: Request, res: Response) {
        const email = req.body.email ? req.body.email : '-1';
		const password = req.body.password ? req.body.password : '-1';

        User
        .findAll({
            attributes: ['id', 'email', 'name'],
            where: { email, password }
        })
        .then(result => {
            if(result.length > 0) {
                let user = result[0];
                const token = jwt.sign({ _id: user.id }, process.env.SERVER_KEY, { expiresIn: process.env.SERVER_EXPIRES });                                
                res.status(200).json({
                    id: user.id,
                    email: user.email,
                    name: user.name,
                    session: token
                });
            } else {
                res.status(404).json('Senha errada, tente novamente!');
            }            
        })
        .catch(e => {
            res.status(500).json(e);
        });
    }

}


