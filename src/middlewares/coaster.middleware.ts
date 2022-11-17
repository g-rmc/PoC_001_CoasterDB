import { Request, Response, NextFunction } from "express";

import { coasterRepository } from '../repositories/coaster.repositories.js';
import { Coaster } from "../protocols/Coaster.js";

async function validateExistingId(req: Request, res: Response, next: NextFunction) {
    const id: number = Number(req.params.id);

    if(isNaN(id)){
        res.status(400).send('invalid id');
        return;
    };

    try {
        const result = await coasterRepository.findCoasterById(id);
        if(!result){
            res.status(404).send('id not found');
            return;
        }
    } catch (error) {
        res.sendStatus(500);
        return;
    }

    res.locals.id = id;

    next();
}

async function validateUniqueRcdbLink(req: Request, res: Response, next: NextFunction) {
    const { rcdbLink }: Coaster = req.body;
    const id: string = res.locals.id;

    try {
        const result = await coasterRepository.findCoasterByRcdbLink(rcdbLink);
        if(result){
            if(id === undefined || Number(result.id) !== Number(id)){
                res.status(409).send('rcdbLink already in use');
                return;
            }
        }
    } catch (error) {
        res.sendStatus(500);
        return;
    }

    next();
}

export { 
    validateExistingId,
    validateUniqueRcdbLink
}