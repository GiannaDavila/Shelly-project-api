import { MongoClient } from 'mongodb';

import "dotenv/config"

export function dbConnect(){
    console.log(process.env.MONGO_URI)
    const client = new MongoClient(process.env.MONGO_URI);
    return client.db("Shelly")
}