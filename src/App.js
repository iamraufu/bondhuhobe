// import logo from './logo.png';
import './App.css';
import { useEffect, useState } from 'react';
import userData from './MOCK_DATA.json';
import User from './component/User/User';

function App() {
  const [users,setUsers]= useState([])
  useEffect(() =>{
    setUsers(userData);
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Number of Users: {users.length}</h1>
        <h5>Users Added: </h5>
        <div className="users">
        {
          users.map(user=><User user={user}></User>)
        }
        </div>
        
      </header>
    </div>
  );
}

export default App;
