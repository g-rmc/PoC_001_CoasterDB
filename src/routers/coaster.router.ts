import express from 'express';

import * as coaster from '../controllers/coaster.controller.js';

const router = express.Router();

router
    .get('/coasters', coaster.getCoasters)
    .post('/coasters', coaster.createCoaster)
    .put('/coasters/:id', coaster.updateCoaster)
    .delete('/coasters/:id', coaster.deleteCoaster)
    .get('/coasters/count', coaster.countCoasters);

export default router;