import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    // ✅ Store user data
    localStorage.setItem("username", username);

    // Redirect to home
    navigate("/");
  };

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-6">
        <div className="bg-gray-800 p-10 rounded-2xl w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-6">Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* USER NAME */}
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600"
            />

            <button
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-600 py-3 rounded-2xl font-semibold"
            >
              Login
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
