import { Request, Response } from 'express';
import { Coaster, NewCoaster } from '../protocols/Coaster.js';

import { coasterRepository } from '../repositories/coaster.repositories.js';

async function getCoasters(_req: Request, res: Response){
    try {
        const coasters = await coasterRepository.listAllCoasters();
        res.send(coasters);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function createCoaster(req: Request, res: Response){
    const newCoaster: NewCoaster = req.body;
    try {
        const result = await coasterRepository.insertNewCoaster(newCoaster);
        res.status(201).send(`Coaster created with id: ${result.id}`);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function updateCoaster(req: Request, res: Response){
    const updatedCoaster: Coaster = req.body;
    const id: number = Number(res.locals.id);
    try {
        await coasterRepository.updateCoasterById(id, updatedCoaster);
        res.status(200).send(`Updated coaster with id: ${id}`);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function deleteCoaster(_req: Request, res: Response){
    const id: number = Number(res.locals.id);
    try {
        await coasterRepository.deleteCoasterById(id);
        res.status(202).send(`Deleted coaster with id: ${id}`);
    } catch (error) {
        res.sendStatus(500);
    }
}

async function countCoasters(_req: Request, res: Response){
    try {
        const result = await coasterRepository.countEveryCoaster();
        res.send({total: result});
    } catch (error) {
        res.sendStatus(500);
    }
}

async function getOneCoaster(_req: Request, res: Response) {
    const id: number = Number(res.locals.id);
    try {
        const result = await coasterRepository.findCoasterById(id);
        res.send(result);
    } catch (error) {
        res.sendStatus(500);
    }
}

export {
    getCoasters,
    createCoaster,
    updateCoaster,
    deleteCoaster,
    countCoasters,
    getOneCoaster
}