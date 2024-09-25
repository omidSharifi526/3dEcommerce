// src/app/auth/signup/page.tsx
'use client';
import { useState } from 'react';
import bcrypt from 'bcryptjs';


export default function SignUp() {
  const [email, setEmail] = useState<any>('');
  const [password, setPassword] = useState<any>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hashedPassword = await bcrypt.hash(password, 10);
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password:hashedPassword }),
    });

    if (res.ok) {
      alert('User registered successfully!');
    } else {
      alert('Error registering user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
