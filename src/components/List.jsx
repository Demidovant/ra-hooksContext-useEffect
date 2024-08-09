import React from 'react';
import './List.css';

function List({ users, onSelectUser, selectedUser }) {
  return (
    <div className="list-container">
      <ul className="user-list">
        {users.map((user) => (
          <li
            key={user.id}
            className={`user-list-item ${selectedUser && selectedUser.id === user.id ? 'selected' : ''}`}
            onClick={() => onSelectUser(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
