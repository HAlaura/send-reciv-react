// src/UserCreation.js
import React, { useState } from 'react';

const UserCreation = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle user data submission, e.g., send it to an API
    console.log('User data submitted:', userData);
  };


    
    fetch('https://your-api-endpoint.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('User created:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  
  

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={userData.username}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            User Level:
            <select
              name="userLevel"
              value={userData.userLevel}
              onChange={handleChange}
            >
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Moderator">Moderator</option>
            </select>
          </label>
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UserCreation;
