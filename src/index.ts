import { config } from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import {router as routes} from './router';
import connectionDB from '../database/connection';
config();

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

//Connexao com Banco MongoDB:
connectionDB()
  .then(response => {
    console.log('Success Connection!');
    console.log(response);
  })
  .catch(err =>  console.log(err))

app.use(routes);

app.listen(process.env.PORT || 3301, () => console.log('Server ligado em http://localhost:3301'))