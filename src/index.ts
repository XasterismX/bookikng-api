
//конфигурирование dotenv
import dotenv from "dotenv";
dotenv.config({path: "../.dev.env"});

import express from "express"; // Подключенние express
import router from "./routers/router"; // Подключение роутов
import appDataSource from "./database/db"; // Подключение к db
import pino from "pino-http";


const app = express()
const port = process.env.PORT || 3000;
app.use(express.json({}))
app.use(pino({
    level: "info",
    transport: {
        target: "pino-pretty"
    }
}))

app.use("/api", router)
    try{

        app.listen(port, async () => {
            await appDataSource.initialize()
            console.log(`Listening on port ${port}`);
        })
    }catch(e){
        appDataSource.destroy().then(r => console.log(e));
    }

