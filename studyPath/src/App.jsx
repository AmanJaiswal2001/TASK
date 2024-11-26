import { useState } from 'react'

import Hero from './components/Hero'
import './App.css'
import Nav from './components/Nav'
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Hero/> */}
      <Nav />
      {/* <Footer /> */}
    </>
  )
}

export default App
