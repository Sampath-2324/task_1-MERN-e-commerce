import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
