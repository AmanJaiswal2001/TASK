import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ContactForm from "./components/ContactUs/ContactForm";
import Hero from './components/Hero';
import { Routes,Route } from 'react-router-dom'
import Signin from './components/Signin'
import Login from './components/Login'
import Nav from './components/Nav'
import Footer from "./components/Footer"
import './App.css';
// import Nav from "./components/Nav"
// import Footer from "./components/Footer"
 import About from "./pages/About";
 import FAQ from "./pages/FAQ";

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
           {/* <Hero/> */}
     <Nav />
      {/* <Footer /> */}

<Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/nav" element={<Nav/>} /> */}
        <Route path="/footer" element={<Footer/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/faq" element={<FAQ/>} />
      </Routes>
    <Footer/>    </>
  );
}

export default App;
