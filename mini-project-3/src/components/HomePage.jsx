import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div style={styles.page}>
      {/* Title */}
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>Welcome to your Digital Keypad! Your go-to Number Converter!</h1>
        <div style={styles.navbar}>
          <Link to="/login" style={styles.navItem}>Login</Link>
          <Link to="/about" style={styles.navItem}>About</Link>
          <Link to="/register" style={styles.navItem}>Sign-Up</Link>
        </div>
      </div>

      
      <div style={styles.content}>
        {/* Info Section */}
        <div style={styles.card}>
          <h2 style={styles.heading}>What is this Keypad?</h2>
          <p style={styles.text}>
            The Digital Keypad allows you to convert numbers across various bases, including binary, 
            octal, decimal, Roman and hexadecimal. This tool is ideal for students, programmers, and tech 
            enthusiasts. You can even enter multiple numbers!
          </p>
          <h3 style={styles.subheading}>Key Features:</h3>
          <ul style={styles.list}>
            <li><strong>Real-Time Conversion:</strong> Instantly see number changes in different bases.</li>
            <li><strong>Simple Interface:</strong> Easy number entry for quick calculations.</li>
            <li><strong>Interactive Controls:</strong> Adjust values using increment/decrement buttons.</li>
          </ul>
        </div>


        <div style={styles.card}>
          <h2 style={styles.heading}>Try a quick demo!</h2>
          <p style={styles.text}>Press this button in order to try out a demo!:</p>
          <button 
        onClick={() => navigate("/demo")} 
      >Demo
      </button>
        </div>
      </div>
    </div>
  );
}


const styles = {
  page: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f7fc",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  titleContainer: {
    backgroundColor: "#3b82f6",
    padding: "20px",
    borderRadius: "8px",
    color: "white",
    width: "100%",
    maxWidth: "1200px",
  },
  title: {
    fontSize: "2rem",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10px",
  },
  navItem: {
    margin: "0 15px",
    fontSize: "18px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "1000px",
    marginTop: "30px",
    gap: "40px",
  },
  card: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    flex: "1",
    textAlign: "left",
    maxWidth: "480px", 
  },
  heading: {
    fontSize: "22px",
    marginBottom: "10px",
    color: "#222",
  },
  subheading: {
    fontSize: "18px",
    marginTop: "15px",
    color: "#333",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#444",
  },
  list: {
    textAlign: "left",
    paddingLeft: "20px",
    fontSize: "16px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "12px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "12px 25px",
    borderRadius: "5px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    width: "100%",
  },
};

export default Homepage;
