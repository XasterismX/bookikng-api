import {ReserveDto} from "../dtos/reserveDto";
import appDataSource from "../database/db";
import Bookings from "../entities/bookingsEntity";
import Event from "../entities/eventEntity";
class ReserveService{


    async create(reserve: ReserveDto): Promise<Bookings | undefined> {

        const eventRepo = appDataSource.getRepository(Event);
        const bookingsRepo = appDataSource.getRepository(Bookings);
        const {userId, eventId} = reserve;
        if (userId === undefined || eventId === undefined) {
            throw new Error("UserId or eventId must be provided");
        }
        try {
            const event = await eventRepo.findOne({where: {id: eventId}});
            console.log(JSON.stringify(event));
            if (!event) {
                throw new Error("Event not found");
            }
            if (event.total_seats === 0){
                throw new Error("Seats are over");
            }
            const existingBookings: Bookings[] = await bookingsRepo.find({where: {user_id: userId, event_id: event}});
            if (existingBookings.length !== 0) {
                throw new Error("Нou have already booked a ticket");
            }
            console.log(1);
            const booking: Bookings = await bookingsRepo.save({
                user_id: userId,
                event_id: event,
            });
            event.total_seats = event.total_seats - 1;
            await eventRepo.save(event);
            console.log(1);

            if (!booking) {
                throw new Error("Unexpected error");
            }
            return booking;
        }catch (e) {
            console.log(e)
        }

    }
}
export default new ReserveService()