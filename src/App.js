// import logo from './logo.png';
import './App.css';
import { useEffect, useState } from 'react';
import userData from './MOCK_DATA.json';
import User from './component/User/User';

function App() {
  const [users, setUsers] = useState([])
  const [connect, setConnect] = useState([]);
  useEffect(() => {
    setUsers(userData);
  }, [])

  const clickToConnect = (name) => {
    setConnect([...connect, name])
    window.scrollTo(0, 0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Number of Users: {users.length}</h1>
        <h5>Users Added: </h5>
        <ul>
          {
            connect.map(m =><li key={m}>{m}</li>)
          }
        </ul>
        <div className="users">
          {
            users.map(user => <User user={user} clickToConnect={clickToConnect} key={user.id}></User>)
          }
        </div>

      </header>
    </div>
  );
}

export default App;
