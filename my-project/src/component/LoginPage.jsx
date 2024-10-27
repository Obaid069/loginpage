import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { FaGoogle } from 'react-icons/fa'; // Import the Google icon from react-icons

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Handle the response from Google (e.g., send to your backend for verification)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-400 to-pink-500">
      <div className="w-full max-w-3xl p-10 space-y-8 bg-white shadow-2xl rounded-xl">
        <div className="flex justify-center">
          <div className="bg-gray-300 rounded-full w-28 h-28"></div>
        </div>
        <h2 className="text-center text-3xl font-bold text-gray-800">Login to your account</h2>
        
        <div className="space-y-6 text-center">
          <p className="text-xl text-gray-700">
            Welcome back! Please login to continue:
          </p>

          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600"
            >
              Login
            </button>
          </form>

          {/* Google Sign-In Button */}
          <div className="mt-4">
            <GoogleLogin
              clientId="YOUR_CLIENT_ID.apps.googleusercontent.com" // Replace with your Google Client ID
              buttonText="Sign in with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  className="flex items-center justify-center w-full py-2 border border-gray-300 rounded-md text-gray-800 font-semibold hover:bg-gray-100"
                >
                  <FaGoogle className="mr-2" /> {/* Google Icon */}
                  Sign in with Google
                </button>
              )}
            />
          </div>
        </div>

        <p className="text-center text-gray-600 mt-8">
          Don't have an account?{' '}
          <Link to="/" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
