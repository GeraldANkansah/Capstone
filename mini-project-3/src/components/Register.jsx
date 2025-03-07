import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/users/register", user);
      alert("Registration successful! You can now log in.");
      navigate("/login"); 
    } catch (error) {
      alert("Registration failed. User might already exist.");
    }
  };

  return (
    <div className="main">
      <h1>Create Your Account</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type="text" name="firstName" placeholder="Enter First Name" required onChange={handleChange} />

        <label>Last Name:</label>
        <input type="text" name="lastName" placeholder="Enter Last Name" required onChange={handleChange} />

        <label>Email:</label>
        <input type="email" name="email" placeholder="Enter Email" required onChange={handleChange} />

        <label>Username:</label>
        <input type="text" name="username" placeholder="Enter Username" required onChange={handleChange} />

        <label>Password:</label>
        <input type="password" name="password" placeholder="Enter Password" required onChange={handleChange} />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
