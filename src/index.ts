import { configDotenv } from 'dotenv';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from "express";
import router from './routes/index';
import bodyParser from 'body-parser';

configDotenv();

const app = express();
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running at port', PORT);
});

app.use(bodyParser.json());
app.use(router);

app.use((err: Error, req: Request, res: Response) => {
  res.status(500).json({ error: 'Internal Server Error' });
});
