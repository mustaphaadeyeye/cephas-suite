import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
// import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Product from "./pages/Product";
import Solution from "./pages/Solution";
import GetStarted from "./pages/GetStarted";

// Needs to live inside <BrowserRouter> so useLocation works
const Layout = () => {
  const { pathname } = useLocation();
  const hideFooter = pathname === "/get-started";

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solution" element={<Solution />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
);

export default App;