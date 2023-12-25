'use client'
import { UserContext } from '@/context/userProvider'; 
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';


const signIn = () => {
    const [data,setData]=useState({email:'',password:''})
    const [showPassword, setShowPassword] = useState(false);
    const router=useRouter()
    const context =useContext(UserContext)
    // Check if context exists before accessing its properties
    if (!context) {
     // Handle the case where context is not available
     return null;
   }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
  const handleChange=(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> )=>{
    return setData(prevData=>{
      return {...prevData,[event.target.name]:event.target.value}
    })
}

async function handleSubmit(event:React.FormEvent<HTMLFormElement>){
event.preventDefault()
if(data.email.trim()==='' || data.password===''){
  return toast.warning('Fill all the required fields',{
    position:'top-center'
  })
}
try {
  const res =await axios.post('/api/signin',data)
  router.push('/show-tasks')
    context?.setIsLogin(true)
       toast.success('Welcome',{
        position:'top-center'
      })
    } catch (error :any) {
       toast.error(`Signin Error : ${error.response.data.message}`,{position:'top-center'})
    }
}
  return (
    <div>
        <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-8 p-8 bg-white rounded-md shadow-md'>
    <h2 className='text-2xl text-blue-500 font-bold mb-6'>SIGN-IN</h2>
  
   
    <div className='mb-4'>
      <label htmlFor='email' className='block text-sm text-gray-700 font-semibold mb-2'>Email</label>
      <input
      type='email'
        id='email'
        name='email'
        value={data.email}
        placeholder='Email'
        onChange={handleChange}
        className='w-full p-2 border text-gray-700 border-gray-300 rounded-md resize-none'
      />
    </div>

    <div className='mb-4 '>
      <label htmlFor='password' className='block text-sm text-gray-700 font-semibold mb-2'>Password</label>
      <div className='relative'>
      <input
      type={showPassword ? 'text' : 'password'}
        id='password'
        name='password'
        value={data.password}
        placeholder='Password'
        onChange={handleChange}
        className='w-full  p-2 border text-gray-700 border-gray-300 rounded-md resize-none'
      />
       <button
        type="button"
        onClick={togglePasswordVisibility}
        className='text-gray-700 opacity-50 absolute top-1/2 right-0   -translate-y-1/2 -translate-x-1/2  cursor-pointer'
       
      >
        {showPassword ? (
          <img src='/eye-slash.svg' alt='show'/>
        ) : (
          <img src='eye.svg' alt='hide'/>
        )}
      </button>
      </div>

    </div>
  
    <button
      className='w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
      type='submit'
    >
      Submit
    </button>
  </form>
    </div>
  )
}

export default signIn