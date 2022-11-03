import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { NODE_ENV, PORT } from '@config';

dotenv.config();

const app: Express = express();
const port = PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[NODE_ENV]: ${NODE_ENV}`);
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
