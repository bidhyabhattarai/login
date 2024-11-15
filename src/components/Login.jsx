import React from 'react';
import schoolImage from '../asset/img/school.jpg';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Container for the Login Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 flex max-w-4xl w-full">
        {/* Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Login
            </button>
          </form>
          <div className="text-center mt-4">
            <p>
              Don't have an account?{' '}
              <a href="/contact" className="text-blue-500 hover:underline">
                contact admin
              </a>
            </p>
          </div>
        </div>

        {/* Image Section */}
      <div className="w-1/2 flex justify-center items-center">
  <img
    src={schoolImage}
    alt="Education Logo"
    className="w-3/4 h-auto rounded-lg"
  />
</div>

      </div>
    </div>
  );
};

export default Login;
