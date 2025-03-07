import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../components/HomePage";
import Register from "../components/Register";
import Login from "../components/Login";
import Converter from "../components/Converter";
import Demo from "../components/Demo"; 
import AboutPage from "../pages/AboutPage"; 
import ConversionHistory from "../components/ConversionHistory";

const PrivateRoute = ({ children }) => {
  return localStorage.getItem("token") ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/converter" element={<Converter />} />
      <Route path="/demo" element={<Demo />} /> 
      <Route path="/about" element={<AboutPage />} /> 
      <Route path="/conversion-history" element={<ConversionHistory />} />
    </Routes>
  );
};

export default AppRoutes;
