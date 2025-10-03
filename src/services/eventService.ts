import CreateEventDto from "../dtos/CreateEventDto";
import appDataSource from "../database/db";
import Event from "../entities/eventEntity";


class EventService {

    async create(data: CreateEventDto): Promise<Event> {
        if (!data.name || !data.total_seats ) {
            throw new Error("No name or total_seats provided");
        }
        return await appDataSource.manager.save(Event,data)

    }

}

export default new EventService();