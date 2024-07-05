import React, { useState } from 'react';
import { useAuth } from '../../Contexts/UserContext';

function SignUp() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && name) {
      signUp(name,email,password)
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
          value={name}
          required
        />
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
        <button type="submit">signUp</button>
      </form>
    </div>
  );
}

export default SignUp;
