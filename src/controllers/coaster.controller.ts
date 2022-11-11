import { Request, Response } from 'express';

async function getCoasters(req: Request, res: Response){
    console.log('getCoasters');
    res.sendStatus(200);
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