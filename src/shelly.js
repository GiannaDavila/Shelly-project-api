import { dbConnect } from './dbConnet.js'
// import { ObjectID } from 'mongodb'

export async function getALlDevice (req, res) {
    const db = dbConnect()
    const collection = await 
        db.collection('shelly-device').find({}).toArray()
    res.send(collection)
}