import { config } from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import { router as routes } from './router';
import { connectionDB } from '../database/connection';
import Agenda from '../database/AgendaModel';
config();

const app = express();

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs');

//Connexao com Banco MongoDB:
connectionDB()
  .then(() => {
    console.log('Success Connection!');

    Agenda.insert({
      date: new Date(),
      middlename: 'Alencar',
      age: 27,
      phoneNumber: 12345467898,
      email: 'dev.alencar.gabriel@gmail.com',
      name: 'Gabriel',
    }).then(resp => {
      console.log(resp);
    }).catch(err => console.log(err))
    
  })
  .catch(err => console.log(err))

app.use(routes);

app.listen(process.env.PORT || 3301, () => console.log('Server ligado em http://localhost:3301'))