import React, { useState } from "react";

function LoginForm({ isLoggedIn, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes, we skip authentication
    onLogin(); // Update parent state
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "inline-block", marginTop: "20px" }}
    >
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit" style={{ marginTop: "10px" }}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
