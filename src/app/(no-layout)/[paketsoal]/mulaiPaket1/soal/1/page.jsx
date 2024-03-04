import PageComponent from "./pageComponent";
import { connectDatabase } from "@/app/lib/db";

import React from 'react'

const page = async() => {
  const db = await connectDatabase()
  const collection = db.collection('paket1')
  const dataSoal = await collection.find({}).toArray()
  return (
    <PageComponent dataSoals={dataSoal} />
  )
}

export default page