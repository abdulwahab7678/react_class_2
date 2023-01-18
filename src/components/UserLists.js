const UserLists = (props) => {
  const list = props.list
  console.log(props.list)
  if ( list && list.length ) {
    return (

    <div>
      {list.map((user) => (
      <div className="user">
        <h1>{user.name}</h1>
        <p>{user.email}</p>
      </div>
      ))}
    </div>
    )
  }
  return (
    <p>There is no user data</p>
  )
}
export default UserLists
