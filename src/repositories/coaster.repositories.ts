import { QueryResult } from 'pg';
import { Coaster, CoasterEntity } from '../protocols/Coaster.js';
import { connection } from '../database/database.js';

async function listAllCoasters(): Promise <QueryResult<CoasterEntity>> {
    return connection.query("SELECT * FROM coasters;")
}

export const coasterRepository = {
    listAllCoasters
}