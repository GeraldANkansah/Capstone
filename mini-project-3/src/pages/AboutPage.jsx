import React from "react";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate(); 

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Digital Keypad</h1>
      <p style={styles.description}>
        The **Digital Keypad** is your ultimate tool for number system conversions! Whether you're a student, programmer, 
        or tech enthusiast, this application makes it easy to convert numbers across **binary, octal, decimal, and hexadecimal** systems. 
       
      </p>

      {/* Key Features */}
      <h2 style={styles.heading}>Key Features</h2>
      <ul style={styles.list}>
        <li><strong>⚡ Real-Time Conversion:</strong> Instantly see numbers transformed across different bases.</li>
        <li><strong>💡 Intuitive Interface:</strong> User-friendly design that makes number conversions seamless.</li>
        <li><strong>📊 Graphical Represenration:</strong> Showcase the values on the graph and see the differences</li>
        <li><strong>🎮 Interactive Controls:</strong> Adjust values using increment & decrement buttons.</li>
      </ul>

    
      <h2 style={styles.heading}>Fun Facts About Number Systems</h2>
      <ul style={styles.list}>
        <li><strong>Binary:</strong> The foundation of all computing, using only 0s and 1s!</li>
        <li><strong>Decimal:</strong> The system we use in everyday life, based on **10 digits (0-9).**</li>
        <li><strong>Hexadecimal:</strong> Often used in programming, where **A-F** represent values from 10 to 15.</li>
        <li><strong>Octal:</strong> A system that uses digits **0-7** and was historically used in computing.</li>
        <li><string>Roman:</string>A system that doesn't have a number 0 since Romans didn't know how to represent nothing.</li>
      </ul>

     
      <button style={styles.button} onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    </div>
  );
}


const styles = {
  container: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f4f7fc",
    padding: "30px",
    borderRadius: "10px",
    width: "70%",
    margin: "auto",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2rem",
    color: "#3b82f6",
  },
  description: {
    fontSize: "1.2rem",
    color: "#444",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  heading: {
    fontSize: "1.5rem",
    marginTop: "20px",
    color: "#222",
  },
  list: {
    textAlign: "left",
    maxWidth: "600px",
    margin: "auto",
    fontSize: "1rem",
    color: "#555",
    lineHeight: "1.6",
  },
  button: {
    marginTop: "20px",
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "12px 20px",
    borderRadius: "5px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
  },
};


