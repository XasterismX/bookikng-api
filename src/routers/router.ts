

import {Router} from "express";

import reserveRouter from"./ReserveRouter"
import eventRouter from "./EvenetRouter";

const router = Router();

router.use("/reserve", reserveRouter);
router.use("/event", eventRouter);

export default router;
