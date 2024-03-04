import { connectDatabase } from "./db";

let data

export default async function fetchData() {
    const db = await connectDatabase()
    const collection = db.collection('paket1')
    return (
        data = await collection.find({}).limit(1).toArray()
    )
}

fetchData()