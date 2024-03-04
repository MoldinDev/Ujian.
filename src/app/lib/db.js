
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI

const client = new MongoClient(uri)

export async function connectDatabase() {
    try{
        await client.connect();
        console.log('Connected to MongoDB Atlas')
        return client.db('dataSoal')
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas: ', error)
        process.exit(1)
    }
}