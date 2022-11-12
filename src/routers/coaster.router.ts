import express from 'express';

import { validateSchema } from '../middlewares/validateSchema.js';
import { validateExistingId, validateUniqueRcdbLink } from '../middlewares/coaster.middleware.js';
import { coasterSchema } from '../schemas/coaster.schema.js';
import * as coaster from '../controllers/coaster.controller.js';

const router = express.Router();

router
    .get('/coasters',
        coaster.getCoasters)
    .post('/coasters',
        validateSchema(coasterSchema),
        validateUniqueRcdbLink,
        coaster.createCoaster)
    .put('/coasters/:id',
        validateSchema(coasterSchema),
        validateExistingId,
        validateUniqueRcdbLink,
        coaster.updateCoaster)
    .delete('/coasters/:id',
        validateExistingId,
        coaster.deleteCoaster)
    .get('/coasters/count',
        coaster.countCoasters);

export default router;