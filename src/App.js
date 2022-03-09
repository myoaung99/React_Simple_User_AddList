import React, { useState } from 'react';
import './App.css';
import NewUser from './components/NewUser/NewUser';
import UserList from './components/UserList/UserList';

const User_List = [];

function App() {
  const [userList, setUserList] = useState(User_List);

  const updateUserListHandler = (newUser) => {
    setUserList(prev => {
      const prevArr = [...prev];
      prevArr.unshift(newUser);
      return prevArr;
    });
  }

  console.log("in app");
  console.log(userList);
  return (
    <div>
      <NewUser onUpdateUserList={updateUserListHandler} />
      <UserList userList={userList} />
    </div>


  );
}

export default App;
