
import {Router, Request, Response} from "express";
import ReserveController from "../controllers/ReserveController";
const router = Router();

router.post("/reserve", (req: Request, res: Response) => {
    ReserveController.create(req, res)
});

export default router;