import React from 'react'

const Nav = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);

const handleMenuToggle = () => {
  setIsMenuOpen(!isMenuOpen);
};

  return (
    <div 
    id='mainNav'
    className='bg-orange-300'>

      <div className='w-screen h-[15vh] md:h-[15vh] flex justify-between items-center px-4 md:px-8'>
        
        <div
        id='logo'
        className='w-[15%] h-[10vh] flex justify-center items-center bg-orange-400'>
          <h1>Logo Here</h1>
        </div>

        <div 
        id="infoPanel"
        className='w-[50%] h-[50%] bg-orange-400 text-white  justify-around items-center rounded-full hidden md:flex'>
          <a href="" className='hover:underline'>Home</a>
          <a href="" className='hover:underline'>About Us</a>
          <a href="" className='hover:underline'>Our Services</a>
          <a href="" className='hover:underline'>Contact Us</a>
        </div>

        <div 
        id="account"
        className='w-[20%] h-[50%] bg-orange-400 text-white justify-around items-center rounded-full hidden md:flex'>
          <a href="" className='hover:underline'>Log-in</a>
          <a href="" className='hover:underline'>Sign-up</a>
        </div>

        <button
        className='text-white md:hidden'
        onClick={handleMenuToggle}>
          <i class="fa-solid fa-bars fa-lg"></i>
        </button>
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