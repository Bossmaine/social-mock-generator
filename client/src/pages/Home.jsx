import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="text-center py-12 px-4">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Social Mock Generator
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Create realistic-looking social media screenshots for WhatsApp, Instagram, Twitter, and more!
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <Link 
            to="/create" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
          >
            Create New Mock
          </Link>
          <Link 
            to="/templates" 
            className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
          >
            Browse Templates
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Popular Platforms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['WhatsApp', 'Instagram', 'Twitter', 'iMessage', 'Facebook', 'Telegram'].map((platform) => (
              <div 
                key={platform}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-200 text-center"
              >
                <h3 className="text-lg font-medium text-gray-800">{platform}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;