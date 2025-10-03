"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../database/db"));
const bookingsEntity_1 = __importDefault(require("../entities/bookingsEntity"));
const eventEntity_1 = __importDefault(require("../entities/eventEntity"));
class ReserveService {
    create(reserve) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventRepo = db_1.default.getRepository(eventEntity_1.default);
            const bookingsRepo = db_1.default.getRepository(bookingsEntity_1.default);
            const { userId, eventId } = reserve;
            if (userId === undefined || eventId === undefined) {
                throw new Error("UserId or eventId must be provided");
            }
            try {
                const event = yield eventRepo.findOne({ where: { id: eventId } });
                console.log(JSON.stringify(event));
                if (!event) {
                    throw new Error("Event not found");
                }
                if (event.total_seats === 0) {
                    throw new Error("Seats are over");
                }
                const existingBookings = yield bookingsRepo.find({ where: { user_id: userId, event_id: event } });
                if (existingBookings.length !== 0) {
                    throw new Error("Нou have already booked a ticket");
                }
                console.log(1);
                const booking = yield bookingsRepo.save({
                    user_id: userId,
                    event_id: event,
                });
                event.total_seats = event.total_seats - 1;
                yield eventRepo.save(event);
                console.log(1);
                if (!booking) {
                    throw new Error("Unexpected error");
                }
                return booking;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.default = new ReserveService();
