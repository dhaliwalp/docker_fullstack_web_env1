import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
        <p className="mb-6">Discover amazing features and connect with others!</p>
        <div className="space-x-4">
          <Link to="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Login
          </Link>
          <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;