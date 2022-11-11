import { Request, Response } from 'express';

import { coasterRepository } from '../repositories/coaster.repositories.js';

async function getCoasters(_req: Request, res: Response){
    try {
        const coasters = await coasterRepository.listAllCoasters();
        res.send(coasters.rows);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function createCoaster(req: Request, res: Response){
    console.log('createCoaster');
    res.sendStatus(200);
}

async function updateCoaster(req: Request, res: Response){
    console.log('updateCoaster | id: ',req.params.id);
    res.sendStatus(200);
}

async function deleteCoaster(req: Request, res: Response){
    console.log('deleteCoaster | id: ', req.params.id);
    res.sendStatus(200);
}

async function countCoasters(req: Request, res: Response){
    console.log('countCoasters');
    res.sendStatus(200);
}

export {
    getCoasters,
    createCoaster,
    updateCoaster,
    deleteCoaster,
    countCoasters
}