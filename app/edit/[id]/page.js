import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js"

export default async function Edit(props) {
  let db = (await connectDB).db('forum')
  let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)});

  return (
    <div>
      <div className="title"> Editing page </div>
      <form action = "/api/post/edit" method="POST">
        <input type="text" name="title" defaultValue = {result.title} className="text-input" />
        <br/>
        <input type="text" name="content" defaultValue ={result.content} className="text-input"/>
        <br/>
        <input name="_id"  defaultValue={result._id.toString()} style={{display: 'none'}} />                
        <input type="submit" value="Submit" className="text-input-button"/>
      </form>
    </div>
  )
}