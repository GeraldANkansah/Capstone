import React from "react";

function Card({ input, binary, octal, hexadecimal, decimal, romanNumeral, onDelete, onMove }) {
  return (
    <div className="card" style={{ backgroundColor: "#ffffff", color: "black", padding: "15px", borderRadius: "8px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", width: "250px", textAlign: "center", margin: "10px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <p><strong>Number:</strong> {input}</p>
      <p><strong>Binary:</strong> {binary}</p>
      <p><strong>Octal:</strong> {octal}</p>
      <p><strong>Hexadecimal:</strong> {hexadecimal}</p>
      <p><strong>Decimal:</strong> {decimal}</p>
      <p><strong>Roman Numeral:</strong> {romanNumeral}</p>
      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        <button onClick={() => onMove(input, -1)} style={{ backgroundColor: "#3a78c9", color: "white" }}>Move Up ⬆</button>
        <button onClick={() => onMove(input, 1)} style={{ backgroundColor: "#3a78c9", color: "white" }}>Move Down ⬇</button>
        <button onClick={onDelete} style={{ backgroundColor: "#ff4d4d", color: "white" }}>Delete ❌</button>
      </div>
    </div>
  );
}

export default Card;
