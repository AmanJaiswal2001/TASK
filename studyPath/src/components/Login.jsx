import React, { useState } from 'react'
import {Link} from "react-router-dom"
const Login = () => {
const[credential,setCredential]= useState({email:"",password:""})
 
   

const handleSubmit=(e)=>{
setCredential({...credential,[e.target.name]:e.target.value})
}


return (
    <div className='bg-gray-50 h-full'>
<h3 className='text-5xl m-auto text-center mt-2'>Login Form</h3>



<div className='flex justify-center  md:flex-row flex-col-reverse  mt-5'>
<div className='flex flex-col md:w-1/2 md:p-10 gap-5 p-5'>
  
    <label className='text-2xl font-semibold'>Email:</label>
   <input type='text'
    className='p-4 outline outline-blue-900'
    placeholder='Enter your email'
    name="email"
    value={credential.email}
    onChange={handleSubmit}
   />
    <label className='text-2xl font-semibold'>Password:</label>
   <input type='text'
    className='p-4 outline outline-blue-900 '
    placeholder='Enter your password'
   name="password"
    value={credential.password}
    onChange={handleSubmit}
   />
    
   

<button className=' mt-4 md:w-80 w-40 bg-blue-800 p-4 m-auto  rounded-full md:rounded-xl text-2xl text-white'>Login</button>


<Link to="/signin">
<p className='text-end text-xl font-bold'>Please SignUp!</p>
</Link>
</div>



<div className='flex justify-end'>
   
    <img 
    className='rounded-full h-96'
    src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="/>
</div>


</div>


    </div>
  )
}

export default Login