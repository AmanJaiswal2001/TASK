import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
// const [isDarkMode, setIsDarkMode] = useState(false);
const handleMenuToggle = () => {
  setIsMenuOpen(!isMenuOpen);
};

// const toggleDarkMode = () => {
//   setIsDarkMode(!isDarkMode);
// };
  return (
    <div 
    id='mainNav'
    className='bg-orange-300'>
    {/* // className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-orange-300 text-black'}`}
    > */}
      <div className='w-screen h-[15vh] md:h-[15vh] flex justify-between items-center px-4 md:px-8'>
        
        <div
        id='logo'
        className='w-[15%] h-[10vh] flex justify-center items-center bg-orange-400'>
          <h1>Logo Here</h1>
          
 {/* <img className='w-320 h-20'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYItTe-nLKfZn5_H4u1_q2AXe9Fh8ADPJIg&s'/>
       */}
        </div>

        <div 
        id="infoPanel"
        className='w-[50%] h-[50%] bg-orange-400 text-white  justify-around items-center rounded-full hidden md:flex'>
          <Link to="/" className='hover:underline'>Home</Link>
          <Link to="" className='hover:underline'>About Us</Link>
          <Link to="" className='hover:underline'>Our Services</Link>
          <Link to="" className='hover:underline'>Contact Us</Link>
        </div>

        <div 
        id="account"
        className='w-[20%] h-[50%] bg-orange-400 text-white justify-around items-center rounded-full hidden md:flex'>
          <Link to="/login" className='hover:underline'>Log-in</Link>
          <Link to="/signin" className='hover:underline'>Sign-up</Link>
        </div>

        <button
        className='text-white md:hidden'
        onClick={handleMenuToggle}>
          <i class="fa-solid fa-bars fa-lg"></i>
        </button>

        {/* <button
          className={`ml-4 p-2 rounded-full ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-orange-400 text-black'}`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button> */}
      </div>
    

    <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-orange-300 text-white p-4`}>
      <a href="" className='flex justify-center border-2 border-white mb-1 rounded-full bg-orange-400'>Home</a>
      <a href="" className='flex justify-center border-2 border-white mb-1 rounded-full bg-orange-400'>About Us</a>
      <a href="" className='flex justify-center border-2 border-white mb-1 rounded-full bg-orange-400'>Our Services</a>
      <a href="" className='flex justify-center border-2 border-white mb-1 rounded-full bg-orange-400'>Contact Us</a>

      <div>
        <a href="" className='flex justify-center border-2 border-white mb-1 rounded-full bg-orange-400'>Login</a>
        <a href="" className='flex justify-center border-2 border-white mb-1 rounded-full bg-orange-400'>Sign Up</a>
      </div>
    </div>
  </div>

  )
}

export default Nav