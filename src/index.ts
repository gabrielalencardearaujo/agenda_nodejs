import { config } from 'dotenv';
import express from 'express';
import {router as routes} from './router';
config();
const app = express();

app.use(routes);

app.listen(process.env.PORT || 3301, () => console.log('Server ligado em http://localhost:3301'))