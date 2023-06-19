import { connectDB } from "@/util/database.js"
import Link from "next/link"
import ListItem from "./ListItem"

export default async function List() {
  const db = (await connectDB).db("forum")
  let result = await db.collection('post').find().toArray()
  return (
    <div className="list-bg">
      <ListItem result={JSON.stringify(result)}/>
    </div>
  )
}