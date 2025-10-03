import {Response, Request} from "express";
import eventService from "../services/eventService";

class EventController {

    async create(req: Request, res: Response) {

        const data = await eventService.create(req.body);
        return res.json(data);
    }

}

export default new EventController();