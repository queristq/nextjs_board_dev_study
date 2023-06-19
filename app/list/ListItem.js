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
                            return r.json()
                        })
                        .then(()=>{
                            e.target.parentElement.style.opacity = 0;
                            setTimeout(()=>{
                                e.target.parentElement.style.display = 'none'
                            },1000)
                        })
                    }}>🗑️</span>
                <p>{a.content}</p>
                </div>
                ))
            }
        </div>
    )
}