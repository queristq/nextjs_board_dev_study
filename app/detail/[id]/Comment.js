'use client'
import {useEffect, useState} from 'react'

export default function Comment(props) {
  let [comment, setComment] = useState('')
  let [data, setData] = useState([])

  let content_id = JSON.parse(props._id)
  useEffect(()=>{
    fetch('/api/comment/read', {method : 'POST', body : content_id})
    .then((r)=>{
        if(r.status==200){
            // console.log("successfully read")
        }
        else{
            // console.log("failed")
        }
        return r.json()
    },[])
    .then((reply_list)=>{
      setData(reply_list)
      // console.log("typeof(reply_list)")
      // console.log(reply_list.length)
      // var htmltext 
      // htmltext=''
      // reply_list.map((a,i)=>{
      //   htmltext = htmltext + a.content + '<br>'
      // })
      // console.log(htmltext)
      // document.getElementById("reply_contents").innerHTML=htmltext
    })
  },[])
  
  return (
      <div>
        <div>댓글목록</div>
        { 
           data.length > 0 ?
           data.map((a,i)=>
             <p key={i}>{a.content}</p>
           )
           : '댓글없음'
        }
        <input onChange={(e)=>{ 
          setComment(e.target.value)
        }} />
        <button onClick={()=>{
          fetch('/api/comment/new', {
            method : 'POST', 
            body : JSON.stringify({comment: comment, _id: content_id}) 
          }) 
        }}>댓글전송</button>
      </div>
  )
} 