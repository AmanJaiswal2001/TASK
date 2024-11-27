import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactUs/ContactForm";
import Hero from './components/Hero';
import { Routes,Route } from 'react-router-dom'
import Signin from './components/Signin'
import Login from './components/Login'
import './App.css';
import Nav from './components/Nav'
import Footer from "./components/Footer"

function App() {
  return (
    <>
      {/* <Hero/> */}
      <Nav />
      {/* <Footer /> */}
<Routes>
 <Route path="/" element={<Hero />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/login" element={<Login />} />
    </Routes>

    </>
  )
}

export default App;
