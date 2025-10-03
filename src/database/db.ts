import {DataSource} from "typeorm";
import Event from "../entities/eventEntity";
import path from "node:path";
import Bookings from "../entities/bookingsEntity";
require('dotenv').config({
   path: '../../.dev.env'
});

const appDataSource = new DataSource({
   host: process.env.POSTGRES_HOST,
   type: "postgres",
   username: process.env.POSTGRES_USER,
   password: process.env.POSTGRES_PASSWORD,
   database: process.env.POSTGRES_DATABASE,
   port: Number(process.env.POSTGRES_PORT),
   entities: [Event, Bookings],
   logging: true,
   synchronize: true,
})
export default appDataSource;