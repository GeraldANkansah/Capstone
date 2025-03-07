// Updated Converter.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./Card";
import CommonConversions from "./CommonConversions";

function Converter() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("0");
  const [savedCards, setSavedCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchConversions = async () => {
      if (!token) return;
      try {
        const response = await axios.get("http://localhost:5000/api/conversions", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSavedCards(response.data);
      } catch (error) {
        console.error("Error fetching conversions:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchConversions();
  }, [token]);

  const convert = async () => {
    if (!token) {
      alert("You must be logged in to save conversions.");
      return;
    }

    const number = parseFloat(inputValue);
    if (isNaN(number)) {
      alert("Please enter a valid number.");
      return;
    }

    const newResult = {
      input: number.toString(),
      binary: number.toString(2),
      octal: number.toString(8),
      decimal: number.toString(10),
      hexadecimal: number.toString(16).toUpperCase(),
    };

    try {
      const response = await axios.post("http://localhost:5000/api/conversions", newResult, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data && response.data.conversion) {
        setSavedCards((prev) => [...prev, response.data.conversion]);
      } else {
        console.error("Unexpected response format:", response.data);
      }
    } catch (error) {
      console.error("Error saving conversion:", error);
    }
  };

  const moveCard = (input, direction) => {
    setSavedCards((prevCards) => {
      const index = prevCards.findIndex((card) => card.input === input);
      if (index === -1) return prevCards;

      const newIndex = index + direction;
      if (newIndex < 0 || newIndex >= prevCards.length) return prevCards;

      const newCards = [...prevCards];
      [newCards[index], newCards[newIndex]] = [newCards[newIndex], newCards[index]];
      return newCards;
    });
  };

  const deleteCard = async (id) => {
    if (!token) return;
    try {
      const response = await axios.delete(`http://localhost:5000/api/conversions/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.status === 200 || response.status === 204) {
        setSavedCards((prevCards) => prevCards.filter((card) => card._id !== id));
      }
    } catch (error) {
      console.error("Error deleting conversion:", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif", backgroundColor: "#f4f7fc", padding: "20px", minHeight: "100vh" }}>
      <h1>Digital Keypad:</h1>
      <input
        type="text"
        value={inputValue}
        placeholder="Enter a number"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setInputValue((prev) => (parseFloat(prev) || 0) + 5)}>+5</button>
        <button onClick={() => setInputValue((prev) => (parseFloat(prev) || 0) + 1)}>+1</button>
        <button onClick={() => setInputValue((prev) => (parseFloat(prev) || 0) - 1)}>-1</button>
        <button onClick={() => setInputValue((prev) => (parseFloat(prev) || 0) - 5)}>-5</button>
      </div>
      <button onClick={convert} style={{ marginTop: "10px" }}>Convert & Save Card</button>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start", gap: "15px", marginTop: "15px" }}>
        {savedCards.map((card, index) => (
          <Card
            key={card._id}
            input={card.input}
            binary={card.binary}
            octal={card.octal}
            hexadecimal={card.hexadecimal}
            decimal={card.decimal}
            romanNumeral={card.romanNumeral}
            customBase={card.customBase}
            onDelete={() => deleteCard(card._id)}
            onMove={moveCard} // Pass move function
          />
        ))}
      </div>
      <CommonConversions savedCards={savedCards} />
      <button onClick={() => navigate("/conversion-history")}>View Conversion Graph 📈</button>
      <button onClick={() => navigate("/")}>Back to HomePage</button>
    </div>
  );
}

export default Converter;