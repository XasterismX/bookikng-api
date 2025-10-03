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
//конфигурирование dotenv
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express")); // Подключенние express
const router_1 = __importDefault(require("./routers/router")); // Подключение роутов
const db_1 = __importDefault(require("./database/db")); // Подключение к db
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json({}));
app.use("/api", router_1.default);
app.use("/docs", router_1.default);
try {
    app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
        yield db_1.default.initialize();
        console.log(`Listening on port ${port}`);
    }));
}
catch (e) {
    db_1.default.destroy().then(r => console.log(e));
}
