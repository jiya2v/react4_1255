import React, { useState, useEffect } from 'react';
import './App.css';
import './index.css';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data.users)) {
          setUsers(data.users.slice(0,4).map((user, index) => ({ id: index + 1, ...user })))
        } else {
          console.error('Data does not contain users array:', data);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container">
      <h1 style={{color:"white"}}>Dummy Data</h1>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Profile pic</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><img src={user.image} alt="Profile pic" width="50" /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.domain}</td>
              <td>{user.ip}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
