import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error('Ошибка при загрузке пользователей:', error));
  }, []);

  return (
    <div className="app-container">
      <List users={users} onSelectUser={setSelectedUser} selectedUser={selectedUser} />
      {selectedUser && <Details info={selectedUser} />}
    </div>
  );
}

export default App;
