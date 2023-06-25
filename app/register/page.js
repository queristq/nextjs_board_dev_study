export default function Register() {
  return (
    <div>
        <form method="POST" action="/api/auth/signup">
          <div className="title"> Registration page </div>
          <input name="name" type="text" placeholder="이름" className="text-input"/> 
          <br/>
          <input name="email" type="text" placeholder="이메일" className="text-input"/>
          <br/>
          <input name="password" type="password" placeholder="비번" className="text-input"/>
          <br/>
          <button type="submit" className="text-input-button">Register</button>
        </form>
    </div>
  )
}