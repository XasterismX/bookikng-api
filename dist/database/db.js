"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const eventEntity_1 = __importDefault(require("../entities/eventEntity"));
const bookingsEntity_1 = __importDefault(require("../entities/bookingsEntity"));
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
    entities: [eventEntity_1.default, bookingsEntity_1.default],
    logging: true,
    synchronize: true,
});
exports.default = appDataSource;
