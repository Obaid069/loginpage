import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-400 to-pink-500">
      <div className="w-full max-w-3xl p-10 space-y-8 bg-white shadow-2xl rounded-xl">
        <div className="flex justify-center">
          <div className="bg-gray-300 rounded-full w-28 h-28"></div>
        </div>
        <h2 className="text-center text-3xl font-bold text-gray-800">Sign up your account</h2>

        <div className="space-y-6 text-center">
          <p className="text-xl text-gray-700">
            Choose your role to sign up:
          </p>

          <div className="grid grid-cols-1 gap-4">
            <Link
              to="/studentsignup"
              className="text-2xl text-orange-500 hover:text-orange-600 hover:underline"
            >
              Student
            </Link>
            <Link
              to="/academiasignup"
              className="text-2xl text-orange-500 hover:text-orange-600 hover:underline"
            >
              Academia
            </Link>
            <Link
              to="/industrysignup"
              className="text-2xl text-orange-500 hover:text-orange-600 hover:underline"
            >
              Industry
            </Link>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-8">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
