import React, { useState, useEffect } from "react";

function CommonConversions({ savedCards }) {
  const [commonConversions, setCommonConversions] = useState([]);

  useEffect(() => {
    if (savedCards.length > 0) {
      calculateCommonConversions();
    } else {
      setCommonConversions([]); 
    }
  }, [savedCards]);

  const calculateCommonConversions = () => {
    const conversionCounts = {};

    savedCards.forEach((card) => {
      const key = `${card.input} → ${card.decimal}, ${card.binary}, ${card.octal}, ${card.hexadecimal} ${card.romanNumeral}`;
      conversionCounts[key] = (conversionCounts[key] || 0) + 1;
    });

    const sortedConversions = Object.entries(conversionCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5) 
      .map(([conversion, count]) => ({ conversion, count }));

    setCommonConversions(sortedConversions);
  };

  return (
    <div
      style={{
        ...styles.container,
        display: savedCards.length === 0 ? "none" : "block", 
      }}
    >
      <h2 style={styles.header}>Most Common Conversions:</h2>
      <ul>
        {commonConversions.length > 0 ? (
          commonConversions.map((item, index) => (
            <li key={index} style={styles.listItem}>
              {item.conversion} (Used {item.count} times)
            </li>
          ))
        ) : (
          <p style={styles.message}>No conversions yet.</p>
        )}
      </ul>
    </div>
  );
}

// **Styling Updates**
const styles = {
  container: {
    textAlign: "center",
    backgroundColor: "#ffffff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    marginTop: "20px",
    minHeight: "auto", // Fix unwanted empty space
  },
  header: {
    color: "black",
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  listItem: {
    listStyle: "none",
    fontSize: "16px",
    padding: "5px 0",
    color: "black", // Ensure text is visible
  },
  message: {
    fontSize: "14px",
    color: "gray",
  },
};

export default CommonConversions;
