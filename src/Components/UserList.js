import React from "react";
import './UserList.css';
import { Spinner } from "reactstrap";

function UserList ({ listOfUsers, loadUsers }) {
  return (
    <div
      style={{
        //play: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
      }}
    >
      {loadUsers ? (
        <Spinner size="sm" color="primary" />
      ) : (
        listOfUsers.map((user,i)=><li className="user-name" key={i}>{user.name}</li>)      
      )}
    </div>


  );
}

export default UserList;