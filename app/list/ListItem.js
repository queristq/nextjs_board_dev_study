'use client'
import Link from "next/link"

export default function ListItem(props){
    return(
        <div>
            {
            JSON.parse(props.result).map((a,i) => (
                <div className="list-item" key={i}>
                    <Link href={"./detail/"+ a._id}> {a.title}  </Link>
                    <Link href={"./edit/"+ a._id}> ✏️ </Link>
                    <span onClick={(e)=>{
                        fetch('/api/post/delete', {method : 'POST', body : a._id})
                        .then((r)=>{
                            if(r.status==200){
                                // console.log("successfully deleted")
                                e.target.parentElement.style.opacity = 0;
                                setTimeout(()=>{
                                    e.target.parentElement.style.display = 'none'
                                },1000)
                                
                            }
                            else{
                                // console.log("failed")
                            }
                            return r.json()
                        })
                    }}>🗑️</span>
                    <p className="content">{a.content}</p>
                    <p className="list_author">{a.author? a.author: 'Unknown Author'}</p>
                </div>
                ))
            }
        </div>
    )
}