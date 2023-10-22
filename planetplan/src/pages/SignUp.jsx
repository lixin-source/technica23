import React, { useState } from 'react';
// import { createClient } from '@supabase/supabase-js';
import { supabase } from '../client';

// const supabase = createClient(supabaseUrl, supabaseKey);

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      // Create a new user in the custom "users" table
      const { data: user, error } = await supabase
        .from('users')
        .insert([
          {
            email,
            password, // You should hash the password before saving it
            // Add other user-related columns as needed
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
