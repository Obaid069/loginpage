import React from 'react';

const ISignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-400 to-pink-500">
      <div className="w-full max-w-3xl p-10 space-y-8 bg-white shadow-2xl rounded-xl">
        <div className="flex justify-center">
          <div className="bg-gray-300 rounded-full w-28 h-28"></div>
        </div>
        <h2 className="text-center text-3xl font-bold text-gray-800">Sign up your account</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="text"
              placeholder="Company"
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="text"
              placeholder="Location"
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-orange-500 text-white text-lg rounded-lg shadow-md hover:bg-orange-600 transition-colors"
          >
            SIGN UP
          </button>
        </form>
        <p className="text-center text-gray-600">
          Already have an account?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ISignUp;
