const User = ({ _id, username, firstName, lastName }) => {
  const firstLast = () => {
    if ( firstName )
      return lastName ? `${firstName} ${lastName}` : `${firstName}`
    else
      return lastName ? '${lastName' : ""
  }
  const name     = () => firstName && lastName ?  firstLast() : username
  const fullName = () => `${username} ${firstLast()}`
  const title    = name()
  return {
    _id,
    title,
    name,
    fullName,
    firstLast
  }
}

export default User
