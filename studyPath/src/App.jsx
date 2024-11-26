import { useState } from 'react'
import Hero from './components/Hero'
import { Routes,Route } from 'react-router-dom'
import Signin from './components/Signin'
import Login from './components/Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
 <Route path="/" element={<Hero />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/login" element={<Login />} />
    </Routes>

    </>
  )
}

export default App
