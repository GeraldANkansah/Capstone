import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={styles.container}>
    <nav className="NavBar">
      <ul className="menu">
        <li>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">About</NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName="active">Login</NavLink>
        </li>
      </ul>
    </nav>
    </div>

  );
}
const styles = {
    container: {
        textAlign: "center",
        padding: "15px",
        backgroundColor: "#2E3571",
      },
      menu: {
        listStyle: "none",
        padding: 0,
        display: "flex",
        justifyContent: "center",
        gap: "10px",
      },
      button: {
        textDecoration: "none",
        padding: "12px 20px",
        borderRadius: "8px",
        backgroundColor: "#86adf1",
        color: "white",
        fontSize: "16px",
        border: "none",
        cursor: "pointer",
        transition: "0.3s",
        display: "inline-block",
      },
      active: {
        backgroundColor: "#3B82F6", 
      },
    };
    
