import { Router } from "express";
import HomeControlller from "./controllers/HomeController";
const router = Router();

router.get('/', HomeControlller.home);

export { router };

