import { Request, Response, NextFunction } from "express";

import { coasterRepository } from '../repositories/coaster.repositories.js';
import { Coaster } from "../protocols/Coaster.js";

async function validateUniqueRcdbLink(req: Request, res: Response, next: NextFunction) {
    const { rcdbLink }: Coaster = req.body;

    try {
        const result = await coasterRepository.findCoasterByRcdbLink(rcdbLink);
        if(result.rowCount !== 0){
            res.status(409).send('rcdbLink already in use');
            return;
        }
    } catch (error) {
        res.sendStatus(500);
        return;
    }

    next();
}

export { validateUniqueRcdbLink }