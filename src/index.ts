
import express from "express";
import router from "./routers/router"
import appDataSource from "./database/db";
require('dotenv').config();

const app = express()
const port = process.env.PORT || 3000;

app.use("/api", router)
app.use(express.json())

async function start() {
    try{
        await appDataSource.initialize()
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        })
    }catch(e){
        console.error(e);
    }

}
start()