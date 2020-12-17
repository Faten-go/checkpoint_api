import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Axios from "axios";
import { useEffect, useState } from "react";
import UserList from './Components/UserList';
import { Navbar , NavbarBrand } from "reactstrap";


function App() {

  const [listOfUSers, setListOfUsers] = useState([]);
  const [loadUsers, setLoadUsers] = useState(true);
  const getUsers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setListOfUsers(res.data);
        setLoadUsers(false);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div className="App">
      
      <Navbar color="light" light="false" expand="md">
        <NavbarBrand>User List from jsonPlaceholder API: </NavbarBrand>
      </Navbar>

      <UserList listOfUsers={listOfUSers} loadUsers={loadUsers}></UserList>

    </div>
  );
}

export default App;
