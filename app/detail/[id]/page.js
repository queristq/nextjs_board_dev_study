import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js"

export default async function Detail(props) {
  let db = (await connectDB).db('forum')
  let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

  return (
    <div>
      <h1 class="title"> {result.title}</h1>
      <p class="content">{result.content}</p>
    </div>
  )
}