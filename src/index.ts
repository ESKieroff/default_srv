import { configDotenv } from 'dotenv';
import dotenv from 'dotenv';
import Express, { request, response } from 'express';

configDotenv();

const app = Express();
app.use(Express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log('Server is running at port', PORT);
});
