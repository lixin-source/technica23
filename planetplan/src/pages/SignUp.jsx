import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { supabase } from '../client';



// const supabase = createClient(supabaseUrl, supabaseKey);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');

  const handleSignUp = async () => {
    try {
      
      const { data: user, error } = await supabase
        .from('users')
        .insert([
          {
            email,
            password,
            fullname 
            
          },
        ]);

      if (error) {
        console.error('Sign up error:', error.message);
        return;
      }

      console.log('Sign up successful. User:', user);
    } catch (error) {
      console.error('General error:', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="Fullname"
        placeholder="Full Name"
        value={fullname}
        onChange={(e) => setFullname(e.target.value)}
      />
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
