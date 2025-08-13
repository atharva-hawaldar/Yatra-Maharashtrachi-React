import React, { useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill all fields.");
      return;
    }
    console.log("Logging in:", { email, password });
    navigate("/"); 
  };

  return (
    <div className="auth-container">
      <h2>Welcome Back, Traveler 🌍</h2>
      <form className="auth-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
        <p>
          Don’t have an account?{" "}
          <span className="auth-link" onClick={() => navigate("/signup")}>
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
}