
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Product from "./pages/Product";
import Solution from "./pages/Solution";
import GetStarted from "./pages/GetStarted";
import SignIn from "./pages/SignIn";
import ScrollToTop from "./components/ScrollToTop";

const Layout = () => {
  const { pathname } = useLocation();

  const hideFooter =
    pathname === "/get-started" ||
    pathname === "/sign-in";

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
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>

      {!hideFooter && <Footer />}
    </>
  );
};

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Layout />
  </BrowserRouter>
);

export default App;
