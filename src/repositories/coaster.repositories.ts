import { Coaster, NewCoaster } from '../protocols/Coaster.js';
import prisma from '../database/database.js';

function listAllCoasters() {
    return prisma.coasters.findMany();
}

function findCoasterByRcdbLink(rcdbLink: string) {
    return prisma.coasters.findUnique({
        where: {
            rcdbLink
        }
    });
}

function findCoasterById(id: number) {
    return prisma.coasters.findUnique({
        where: {
            id
        }
    });
}

async function insertNewCoaster(newCoaster: Coaster) {
    return prisma.coasters.create({
        data: newCoaster as NewCoaster
    });
}

async function updateCoasterById(id: number, updatedCoaster: Coaster) {
    return prisma.coasters.update({
        where: {
            id
        },
        data: updatedCoaster
    });
}

async function deleteCoasterById(id: number) {
    return prisma.coasters.delete({
        where: {
            id
        }
    });
}

function countEveryCoaster() {
    return prisma.coasters.count();
}

export const coasterRepository = {
    listAllCoasters,
    findCoasterByRcdbLink,
    findCoasterById,
    insertNewCoaster,
    updateCoasterById,
    deleteCoasterById,
    countEveryCoaster
};
