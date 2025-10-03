import {Request, Response} from "express";

class ReserveController {
    create(req: Request, res: Response) {
        const {event_id, user_id} = req.body;
        return res.json();
    }
}

export default new ReserveController();