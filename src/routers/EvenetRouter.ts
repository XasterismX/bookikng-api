import {Router, Request, Response} from "express";
import EventController from "../controllers/EventController";


const router = Router();

router.post("/create", EventController.create)

export default router;