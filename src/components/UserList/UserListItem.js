import React from "react";

const UserListItem = props => {
  return (
    <li>{props.name} ({props.age})</li>
  )
}

export default UserListItem;