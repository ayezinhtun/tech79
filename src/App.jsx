import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Industries from "./pages/Industries";
import Support from "./pages/Support";
import Partner from "./pages/Partner";  

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>} />
         <Route path="/projects" element={<Project/>} />
         <Route path="/industries" element={<Industries/>} />
         <Route path="/services" element={<Services/>} />
        <Route path="/support" element={<Support/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/partners" element={<Partner/>} />

       </Routes>
       <Footer/>
    </BrowserRouter>
  );
}

export default App;
