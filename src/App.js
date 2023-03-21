import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Coins from "./components/Coins";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/about" element={<About />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
