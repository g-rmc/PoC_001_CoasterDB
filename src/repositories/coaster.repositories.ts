import { QueryResult } from 'pg';
import { Coaster, CoasterEntity } from '../protocols/Coaster.js';
import { connection } from '../database/database.js';

function listAllCoasters(): Promise <QueryResult<CoasterEntity>> {
    return connection.query("SELECT * FROM coasters;")
}

function findCoasterByRcdbLink(rcdbLink: string): Promise <QueryResult<CoasterEntity>>{
    return connection.query(
        `SELECT * FROM coasters
        WHERE "rcdbLink" = $1;`,
        [rcdbLink]
    );
}

function findCoasterById(id: number): Promise <QueryResult<CoasterEntity>>{
    return connection.query(
        `SELECT * FROM coasters
        WHERE id = $1;`,
        [id]
    );
}

async function insertNewCoaster(newCoaster: Coaster) {
    const id: number = (
        await connection.query(
            `INSERT INTO coasters
            ("rcdbLink", "coasterName", "parkName", "length", "drop", "speed", "openingYear")
            VALUES
            ($1, $2, $3, $4, $5, $6, $7)
            RETURNING id;`,
            [
                newCoaster.rcdbLink,
                newCoaster.coasterName,
                newCoaster.parkName,
                newCoaster.length,
                newCoaster.drop,
                newCoaster.speed,
                newCoaster.openingYear
            ]
        )
    ).rows[0].id;
    return id;
}

async function updateCoasterById(id: number, updatedCoaster: Coaster) {
    await connection.query(
        `UPDATE coasters
        SET
            "rcdbLink" = $2,
            "coasterName" = $3,
            "parkName" = $4,
            "length" = $5,
            "drop" = $6,
            "speed" = $7,
            "openingYear" = $8
        WHERE
            id = $1;`,
        [
            id,
            updatedCoaster.rcdbLink,
            updatedCoaster.coasterName,
            updatedCoaster.parkName,
            updatedCoaster.length,
            updatedCoaster.drop,
            updatedCoaster.speed,
            updatedCoaster.openingYear
        ]);
    return;
}

async function deleteCoasterById(id: number) {
    await connection.query(
        `DELETE FROM coasters
        WHERE id = $1;`,
        [id]
    );
    return
}

function countEveryCoaster() {

}

export const coasterRepository = {
    listAllCoasters,
    findCoasterByRcdbLink,
    findCoasterById,
    insertNewCoaster,
    updateCoasterById,
    deleteCoasterById
}