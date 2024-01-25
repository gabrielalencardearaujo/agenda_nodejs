import { Router } from "express";
import HomeControlller from "./controllers/HomeController";
const router = Router();

router.get('/', HomeControlller.home);

router.get('/cadastro', HomeControlller.indexAppointment);
router.post('/cadastro', HomeControlller.newAppointment);

router.get('/consultar', HomeControlller.consulterAppointment);


export { router };
