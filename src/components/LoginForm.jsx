import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { FaUser, FaLock, FaSteam, FaGoogle, FaDiscord } from "react-icons/fa";
import { GiGamepad } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    setError(""); // Clear error on input change
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     try {
//      const response = await axios.get("http://localhost:5000/api/auth/signin", {
//   username: credentials.username, // or email, depending on backend requirements
//   password: credentials.password,
// });
//       console.log("Sign-in successful:", response.data.username);

//       // Save token in localStorage if "Remember me" is checked
//       if (rememberMe) {
//         localStorage.setItem("token", response.data.token);
//       }

//       // Redirect to upload page
//       setIsLoading(false);
//       navigate("/upload");
//     } catch (err) {
//       console.error("Sign-in error:", err.response?.data || err.message);
//       setError(err.response?.data?.error || "Invalid username or password");
//       setIsLoading(false);
//     }
//   };


const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        navigate('/dashboard');
      } else {
        setErrors({ api: data.message });
      }
    } catch (error) {
      setErrors({ api: 'An error occurred. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    setIsLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/google-signin", {
        credential: credentialResponse.credential,
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        navigate("/dashboard");
      } else {
        setError(res.data.message || "Google sign-in failed.");
      }
    } catch (err) {
      console.error("Google sign-in error:", err.response?.data || err.message);
      setError(err.response?.data?.message || "An error occurred during Google sign-in.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleError = () => {
    console.error("Google Sign-In was unsuccessful. Try again later");
    setError("Google sign-in failed. Please try again.");
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <GiGamepad className="mx-auto text-5xl text-orange-500 mb-3" />
          <h2 className="text-5xl font-bold text-white mb-2 font-primary">WELCOME BACK</h2>
        </div>

        <div className="bg-[#111] rounded-xl shadow-2xl overflow-hidden border border-gray-700">
          <form onSubmit={handleSubmit} className="p-8">
            {/* Username */}
            <div className="mb-6">
              <label className="text-white text-sm font-medium mb-2 flex items-center">
                <FaUser className="mr-2 text-orange-500" />
                Username or Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-10 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your username"
                  required
                />
                <FaUser className="absolute left-3 top-3.5 text-gray-500" />
              </div>
            </div>

            {/* Password */}
            <div className="mb-6">
              <label className="block text-white text-sm font-medium mb-2 flex items-center">
                <FaLock className="mr-2 text-orange-500" />
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 pl-10 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="Enter your password"
                  required
                />
                <FaLock className="absolute left-3 top-3.5 text-gray-500" />
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

            {/* Remember me */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-600 bg-black"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="text-orange-500 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-md font-medium text-black bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 ${
                isLoading ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0..."
                    />
                  </svg>
                  SIGNING IN...
                </span>
              ) : (
                "SIGN IN"
              )}
            </button>
            {/* Divider */}
            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#111] text-gray-400">OR CONTINUE WITH</span>
              </div>
            </div>

            {/* Social logins */}
            <div className="mt-6 grid grid-cols-3 gap-3">
               <a href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-700 rounded-lg shadow-sm bg-black text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors duration-300"
                    onClick={() => window.location.href = 'http://localhost:5000/api/auth/github'}
                    >
                    <FaSteam className="h-5 w-5" />
              </a>
                            <div className="flex justify-center">
                <GoogleLogin
                  onSuccess={handleGoogleSuccess}
                  onError={handleGoogleError}
                  useOneTap
                  theme="outline"
                  size="medium"
                />
              </div>
              <a href="#" className="flex justify-center py-2 px-4 border border-gray-700 rounded-lg bg-black text-gray-300 hover:bg-gray-800 transition">
                <FaDiscord />
              </a>
            </div>
          </form>

          {/* Footer link */}
          <div className="px-8 py-4 bg-black text-center border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              Don't have an account?{' '}
              <Link to="/signup" className="text-orange-500 hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
