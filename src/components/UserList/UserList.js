import React from "react";
import UserListItem from "./UserListItem";

const UserList = props => {

  const showUserList = props.userList.map((user) => <UserListItem key={user.id} name={user.name} age={user.age} />)
  return (
    <div>
      {showUserList}
    </div>
  )
}

export default UserList;