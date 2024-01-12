import { configDotenv } from 'dotenv';
import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from "express";
import router from './routes/index';
import bodyParser from 'body-parser';
import path from 'path';


configDotenv();

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function (req, res) {
  var mascots = [
    { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012 },
    { name: 'Tux', organization: "Linux", birth_year: 1996 },
    { name: 'Moby Dock', organization: "Docker", birth_year: 2013 }
  ];
  var tagline = "No programming concept is complete without a cute animal mascot.";

  res.render('pages/index', {
    mascots: mascots,
    tagline: tagline
  });
});

app.get('/about', function (req, res) {
  res.render('pages/about');
});
app.get('/settings', function (req, res) {
  res.render('pages/settings');
});
app.get('/getstarted', function (req, res) {
  res.render('pages/getstarted');
});

app.listen(PORT, () => {
  console.log('Server is running at port', PORT);
});

app.use(express.json());
app.use(bodyParser.json());
app.use(router);

app.use((err: Error, req: Request, res: Response) => {
  res.status(500).json({ error: 'Internal Server Error' });
});
