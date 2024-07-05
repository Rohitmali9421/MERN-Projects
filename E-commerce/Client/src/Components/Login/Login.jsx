import React, { useState } from 'react';
import { useAuth } from '../../Contexts/UserContext';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(email, password);
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          onChange={(e) => setEmail(e.target.value)} 
          type="email" 
          placeholder="email" 
          value={email} 
          required 
        />
        <input 
          onChange={(e) => setPassword(e.target.value)} 
          type="password" 
          placeholder="password" 
          value={password} 
          required 
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
