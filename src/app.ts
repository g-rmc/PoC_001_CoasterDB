import express from 'express';
import cors from 'cors';

import coasterRouter from './routers/coaster.router.js';

const app = express();

app
    .use(cors())
    .use(express.json())
    .use(coasterRouter);

export default app;