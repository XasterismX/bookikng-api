"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require('dotenv').config({
    path: './src/.env'
});
const appDataSource = new typeorm_1.DataSource({
    host: 'localhost',
    type: "postgres",
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    entities: ["../src/entities/*.ts"],
    logging: true,
    synchronize: true,
});
exports.default = appDataSource;
