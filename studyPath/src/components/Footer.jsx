import React from 'react'

const Footer = () => {
  return (
    <div
    id='mainFooter'
    className='bg-orange-300 w-full h-auto md:h-[30vh] flex justify-center items-center flex-col py-8'>
        
        <div 
        id='infoPanel'
        className='w-[70%] md:w-[70%] h-auto md:h-[20%] bg-orange-400 rounded-full 
        flex justify-around items-center text-md text-white md:text-sm'>
          <a href="" className='hover:underline'>Home</a>
          <a href="" className='hover:underline'>About Us</a>
          <a href="" className='hover:underline'>Our Services</a>
          <a href="" className='hover:underline'>Contact Us</a>
        </div>
      
    </div>
  )
}

export default Footer
