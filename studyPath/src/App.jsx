import { useState } from 'react'
import Hero from './components/Hero'
import { Routes,Route } from 'react-router-dom'
import Signin from './components/Signin'
import Login from './components/Login'
import Nav from './components/Nav'
import Footer from "./components/Footer"
import './App.css'

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
    </Routes>
    <Footer/>
    </>
  )
}

export default App
