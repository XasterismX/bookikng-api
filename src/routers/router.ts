

import {Router} from "express";

import reserveRouter from"./ReserveRouter"

const router = Router();
router.use("/reserve", reserveRouter);

export default router;
