import {DataSource} from "typeorm";
import Event from "../entities/eventEntity";
require('dotenv').config({
   path: './src/.env'
});
const appDataSource: DataSource = new DataSource({
   host: 'localhost',
   type: "postgres",
   username: process.env.DB_USERNAME,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_DATABASE,
   port: Number(process.env.DB_PORT),
   entities: ["../src/entities/*.ts"],
   logging: true,
   synchronize: true,
})
export default appDataSource;