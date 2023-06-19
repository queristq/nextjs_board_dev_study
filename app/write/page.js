export default function Write(){
    return(
        <div>
            <div className="title"> Writing page </div>
            <form action = "/api/post/new" method="POST">
                <input type="text" name="title" placeholder ="title" className="text-input" />
                <br/>
                <input type="text" name="content" placeholder ="content" className="text-input"/>
                <br/>
                <input type="submit" value="Submit" className="text-input-button"/>
            </form>
        </div>
    )
}