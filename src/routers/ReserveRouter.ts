
import {Router, Request, Response} from "express";
import ReserveController from "../controllers/ReserveController";

const router = Router();

router.post("/create", ReserveController.create);

export default router;