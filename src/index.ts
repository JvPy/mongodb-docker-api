import {config} from 'dotenv'
import express, {json} from "express"
import connectToDatabase from './connection/mongo';
import router from './routes';
config()

const app = express();
connectToDatabase()
app.use(json());
app.use(router)

app.listen(process.env.PORT || 3000);