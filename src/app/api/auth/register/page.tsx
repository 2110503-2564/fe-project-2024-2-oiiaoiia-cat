'use client';

import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import userRegister from '@/libs/userRegister';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('User Registered:', formData);
    userRegister(formData.name,formData.tel,formData.email,formData.password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <TextField 
            label="Full Name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            fullWidth 
            required
          />
          <TextField 
            label="Telephone" 
            name="tel" 
            type="tel" 
            value={formData.tel} 
            onChange={handleChange} 
            fullWidth 
            required
          />
          <TextField 
            label="Email" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            fullWidth 
            required
          />
          <TextField 
            label="Password" 
            name="password" 
            type="password" 
            value={formData.password} 
            onChange={handleChange} 
            fullWidth 
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
}