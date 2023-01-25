import { MongoClient, ObjectId } from "mongodb";
import { uri, dev } from './credentials.js';
import express from "express";
import cors from 'cors';
import "dotenv/config";

const PORT = 3030
const app = express();
app.use(cors());
app.use(express.json())

const client = new MongoClient(uri); 
// ONLINE
// const client = new MongoClient(dev); 
// OFFLINE

const db = client.db('Shelly');

const shellyCollection = db.collection('Shelly')

//add one
const item = {
    name: 'gigi'
}

async function addOneItem(startup_log) {
    const res = await db.collection("startup_log").insertOne(startup_log);
    console.log(res);
}
addOneItem(item);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));