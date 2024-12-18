import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ContactForm from "./components/ContactUs/ContactForm";
import Home from './components/Home';
import Academics from './components/Academics/Academics';
import { Routes,Route } from 'react-router-dom'
// import Signin from './components/Signin'
// import Login from './components/Login'
import Nav from './components/Nav'
import Footer from "./components/Footer"
import Signin from './components/Users/Register';
import Login from './components/Users/Login';
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
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/nav" element={<Nav/>} /> */}
        <Route path="/footer" element={<Footer/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/Academics" element={<Academics />} />
        <Route path="/signup" element={<Signin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    <Footer/>    </>
  );
}

export default App;
