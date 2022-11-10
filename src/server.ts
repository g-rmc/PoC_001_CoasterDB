import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

//import router from './routers/router.js';

const app = express();
app.use(cors());
app.use(express.json());

//app.use(router);

app.listen(process.env.PORT, () => { 
	console.log(`Listening on ${process.env.PORT}`);
});