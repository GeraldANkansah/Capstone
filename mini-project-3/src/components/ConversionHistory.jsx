import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";
import "chart.js/auto";
import { useNavigate } from "react-router-dom";

const ConversionHistory = () => {
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem("token"); // Get token

      if (!token) {
        console.error("No token found, cannot fetch conversion history.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:5000/api/conversions", {
          headers: { Authorization: `Bearer ${token}` }, // Add token here
        });
        setHistory(response.data);
        console.log("Fetched history:", response.data); // Debugging log
      } catch (error) {
        console.error("Error fetching conversion history:", error);
      }
    };

    fetchHistory();
  }, []);

  const romanToInt = (roman) => {
    const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let num = 0;
    for (let i = 0; i < roman.length; i++) {
      if (romanMap[roman[i]] < romanMap[roman[i + 1]]) {
        num -= romanMap[roman[i]];
      } else {
        num += romanMap[roman[i]];
      }
    }
    return num;
  };

  const chartData = {
    labels: history.map((entry, index) => `Conversion ${index + 1}`),
    datasets: [
      {
        label: "Number Conversions",
        data: history.map((entry) => parseInt(entry.decimal, 10) || 0), // Ensure valid numbers
        borderColor: "blue",
        borderWidth: 2,
        fill: false,
        pointBackgroundColor: "blue",
      },
    ],
  };

  const chartOptions = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const entry = history[context.dataIndex];
            return [
              `Decimal: ${entry.decimal || "N/A"}`,
              `Binary: ${entry.binary || "N/A"}`,
              `Hexadecimal: ${entry.hexadecimal || "N/A"}`,
              `Octal: ${entry.octal || "N/A"}`,
              `Roman Numeral: ${entry.romanNumeral || "N/A"}`,
            ];
          },
        },
      },
    },
  };

  return (
    <div style={styles.container}>
      <h2>Conversion History</h2>
      {history.length === 0 ? (
        <p>No conversions yet.</p>
      ) : (
        <Line data={chartData} options={chartOptions} />
      )}
      
      <button style={styles.backButton} onClick={() => navigate("/converter")}>
        Back to Conversion
      </button>
      <button style={styles.backButton} onClick={() => navigate("/")}>
        Back to HomePage
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "700px",
    margin: "auto",
  },
  backButton: {
    marginTop: "20px",
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#3b82f6",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default ConversionHistory;