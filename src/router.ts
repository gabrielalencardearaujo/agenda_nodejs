import { Router } from "express";
import HomeControlller from "./controllers/HomeController";
const router = Router();

router.get('/', HomeControlller.home);

router.get('/cadastro', HomeControlller.indexAppointment);
router.post('/cadastro', HomeControlller.newAppointment);

// Retorna todas as consultas:
router.get('/getcalendar', HomeControlller.consulterAppointment);

router.get('/event/:id', HomeControlller.eventAppointment);
router.get('/list', HomeControlller.allAppointments);

router.post('/event', HomeControlller.finish);

export { router };
