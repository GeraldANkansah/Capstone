import React from "react";
import AppRoutes from "./Routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
// import NavBar from "./components/Navbar";
import "./styles/styles.css"

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
