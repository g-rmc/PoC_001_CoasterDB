import { QueryResult } from 'pg';
import { Coaster, CoasterEntity } from '../protocols/Coaster.js';
import { connection } from '../database/database.js';

async function listAllCoasters(): Promise <QueryResult<CoasterEntity>> {
    return connection.query("SELECT * FROM coasters;")
}

async function findCoasterByRcdbLink(rcdbLink: string): Promise <QueryResult<CoasterEntity>>{
    return connection.query(
        `SELECT * FROM coasters
        WHERE "rcdbLink" = $1;`,
        [rcdbLink]
    )
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

export const coasterRepository = {
    listAllCoasters,
    findCoasterByRcdbLink,
    insertNewCoaster
}