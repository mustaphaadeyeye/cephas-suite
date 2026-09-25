import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
// import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Product from "./pages/Product";
import Solution from "./pages/Solution";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solution" element={<Solution />} />
        
      </Routes>
          {/* <Footer/> */}
    </BrowserRouter>
  );
};

export default App;
