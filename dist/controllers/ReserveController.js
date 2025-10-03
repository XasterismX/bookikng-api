"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ReserveController {
    create(req, res) {
        const { event_id, user_id } = req.body;
        return res.json();
    }
}
exports.default = new ReserveController();
