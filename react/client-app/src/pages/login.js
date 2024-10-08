import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const LoginPage = () => {
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    setError('Invalid credentials');
  };

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              maxLength={10}
              minLength={5}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              maxLength={20}
              minLength={8}
              required
            />
          </div>
          
          <Button type="submit" className="w-full">Login</Button>
        </form>
        
        <div className="mt-4">
          <Button variant="outline" className="w-full" onClick={handleRegister}>
            Register
          </Button>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;