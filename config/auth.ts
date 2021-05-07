import * as jwt from 'jsonwebtoken';

import { Request, Response, NextFunction } from 'express';
import { Access } from '../app/models/access.model';

export const verify = (endpoint: string) => {
    return (req: Request, res: Response, next: NextFunction) => {

        const bearerHeader = req.headers['authorization'];
        if(typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];

            jwt.verify(bearerToken, process.env.SERVER_KEY, (err, decoded) => {
                if (err) {
                    return res.status(401).send('You need to be authenticated to continue.');
                } else {                               
                    if (endpoint === 'public' || endpoint === '') {
                        res.locals.user = decoded._id;
                        return next();
                    } else {
                        return Access
                            .findAll({
                                where: {
                                    id_user: decoded._id,
                                    endpoint
                                }
                            })
                            .then(result => {
                                if (result.length > 0) {
                                    res.locals.user = decoded._id;
                                    next();
                                } else {
                                    return res.status(403).send('Request [' + endpoint + '] not allowed for this user!');
                                }
                            })
                            .catch(e => {                                    
                                return res.status(500).send({});
                            });
                    }                                       
                }
            });
            
        } else {
            return res.status(401).send(`Request not allowed. Enpoint ${endpoint}.`);
        }
    }
}
