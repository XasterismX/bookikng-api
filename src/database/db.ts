import {DataSource} from "typeorm";
import Event from "../entities/eventEntity";
import path from "node:path";
import Bookings from "../entities/bookingsEntity";
require('dotenv').config({
   path: './src/.dev.env'
});

const appDataSource = new DataSource({
   host: process.env.DB_HOST,
   type: "postgres",
   username: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE,
   port: Number(process.env.DB_PORT),
   entities: [Event, Bookings],
   logging: true,
   synchronize: true,
})
export default appDataSource;