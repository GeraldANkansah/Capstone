import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, role }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials. Please try again.");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/converter");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={styles.main}>
      <h1 style={styles.title}>The Digital Keypad</h1>
      <h3 style={styles.subtitle}>Enter your login credentials</h3>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Username:</label>
        <input
          type="text"
          placeholder="Enter your Username"
          required
          value={username}
          name="username"
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />

        <label style={styles.label}>Password:</label>
        <input
          type="password"
          placeholder="Enter your Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        {/* Role Selection Dropdown */}
        <label style={styles.label}>I am a:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.select}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="engineer">Engineer</option>
        </select>

        <div style={styles.wrap}>
          <button type="submit" style={styles.button}>Login</button>
        </div>
      </form>

      <p style={styles.registerText}>
        Not registered? <Link to="/register" style={styles.link}>Create an account</Link>
      </p>
    </div>
  );
}

// 🎨 **Styles**
const styles = {
  main: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#b3c6ff",
  },
  title: {
    color: "#99ff99",
    fontSize: "2.5rem",
    marginBottom: "5px",
  },
  subtitle: {
    color: "#444",
    marginBottom: "20px",
  },
  form: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    width: "350px",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  select: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#f8f8f8",
    color:"blue",
    cursor: "pointer",
  },
  wrap: {
    textAlign: "center",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#b3e0f7",
    color: "#333",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  registerText: {
    textAlign: "center",
    marginTop: "15px",
    fontSize: "14px",
  },
  link: {
    color: "#5b84ff",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Login;
