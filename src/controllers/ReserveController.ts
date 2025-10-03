import {Request, Response} from "express";
import {ReserveDto} from "../dtos/reserveDto";
import reserveService from "../services/reserveService";

class ReserveController {
    async create(req: Request, res: Response): Promise<Response<ReserveDto>> {
        const data = await reserveService.create(req.body) ;
        return res.json(data);
    }
}

export default new ReserveController();