import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import './LoginPage.css'; // Ensure the path is correct


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate(); // Replaces useHistory

  const handleLogin = async () => {
    try {
      const response = await axios.get(`https://swapi.dev/api/people/?search=${username}`);
      const user = response.data.results[0];

      if (user && user.birth_year === password) {
        setUser(user);
        navigate('/search'); // Replaces history.push
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      console.error('Error fetching character:', error);
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
