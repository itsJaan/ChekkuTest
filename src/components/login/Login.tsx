import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    localStorage.setItem("authToken", "mock-token");
    localStorage.setItem("demoUser", username);
    navigate("/dashboard");
  };

  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#0f172a" }}>
      <form
        onSubmit={handleLogin}
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#111827",
          padding: 24,
          borderRadius: 16,
          color: "white",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
        }}
      >
        <h1 style={{ marginBottom: 8 }}>Chekku Demo Login</h1>
        <p style={{ marginBottom: 20, color: "#94a3b8" }}>
          Demo access for portfolio presentation
        </p>

        <div style={{ display: "grid", gap: 12 }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{
              padding: 12,
              borderRadius: 10,
              border: "1px solid #334155",
              background: "#0f172a",
              color: "white",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: 12,
              borderRadius: 10,
              border: "1px solid #334155",
              background: "#0f172a",
              color: "white",
            }}
          />

          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 10,
              border: "none",
              background: "#2563eb",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;