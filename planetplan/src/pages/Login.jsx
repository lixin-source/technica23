import React, { useState } from 'react';
import { supabase } from '../client';
import {useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const { data, error } = await supabase
        .from('users') // Replace with your actual user table name
        .select()
        .eq('email', email)
        .eq('password', password)
        .single();

      if (error) {
        console.error('Login error:', error.message);
        return;
      }

      if (data) {
        // User is logged in, you can perform further actions here
        console.log('Login successful. User:', data);
        navigate('/home');
      } else {
        console.error('Login failed. Invalid email or password.');
      }
    } catch (error) {
      console.error('General error:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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

export default Login;
