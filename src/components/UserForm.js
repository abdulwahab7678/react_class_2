import { useState } from "react"


const UserForm = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    props.addUser({ name, email })
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="grid">
          <label htmlFor="">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="enter name" required />
        </div>
        <div className="grid">
          <label htmlFor="">Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="enter email" required />
        </div>
        <div><button type="submit">Add User</button></div>
      </form>
    </div>
  )
}

export default UserForm
