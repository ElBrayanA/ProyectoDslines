import { Router } from "express";
import {methods as languageControllers} from "./../controller/language.controller"
const router = Router()

router.get("/:id", languageControllers.getLinea)
router.post("/", languageControllers.ObjetivosAdd)
router.get("/", languageControllers.getSemanal)

export default router;