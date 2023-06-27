import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js"
import Comment from './Comment.js'

export default async function Detail(props) {
  let db = (await connectDB).db('forum')
  let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

  return (
    <div>
      <h1 class="title"> {result.title}</h1>
      <p class="content">Content: {result.content}</p>
      <p class="content">ID: {JSON.stringify(result._id)}</p>
      <Comment _id={JSON.stringify(result._id)}></Comment>
      {/* <Comment _id={result._id}></Comment> */}
    </div>
  )
}