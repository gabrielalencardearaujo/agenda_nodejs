import { Router } from "express";
import HomeControlller from "./controllers/HomeController";
const router = Router();

router.get('/', HomeControlller.home);

router.get('/cadastro', HomeControlller.newConsulter);


export { router };
