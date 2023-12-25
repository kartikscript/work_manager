'use client'
import axios from "axios"
import { useState } from "react"
import { toast } from "react-toastify"

export default function addwork(){
  const [data, setData] =useState({title:'',description:''})

  const handleChange=(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> )=>{
      return setData(prevData=>{
        return {...prevData,[event.target.name]:event.target.value}
      })
  }

  const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try {
      
      const response = await axios.post("/api/addwork", data);
      toast.success('Task Added!!',{position:'top-center'})    
      setData({title:'',description:''})  
    } catch (error:any) {
      if (axios.isAxiosError(error)) {
        toast.error(`Error in Adding Task: ${error.response?.data.message}`);
      } else {
        toast.error(`Unexpected Error in Adding Task: ${error.message}`);
      }    }
  } 
  
  return(
    <form onSubmit={handleSubmit} className='max-w-md mx-auto mt-8 p-8 bg-white rounded-md shadow-md'>
    <h2 className='text-2xl text-blue-500 font-bold mb-6'>ADD TASK</h2>
  
    <div className='mb-4'>
      <label htmlFor='title' className='block text-gray-700 text-sm font-semibold mb-2'>Title</label>
      <input
        id='title'
        name='title'
        value={data.title}
        type='text'
        placeholder='Enter Work Title'
        onChange={handleChange}
        className='w-full p-2 border text-gray-700 border-gray-300 rounded-md'
      />
    </div>
  
    <div className='mb-4'>
      <label htmlFor='description' className='block text-sm text-gray-700 font-semibold mb-2'>Description</label>
      <textarea
        id='description'
        name='description'
        value={data.description}
        rows={4}
        placeholder='Enter Work Description'
        onChange={handleChange}
        className='w-full p-2 border text-gray-700 border-gray-300 rounded-md resize-none'
      ></textarea>
    </div>
  
    <button
      className='w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'
      type='submit'
    >
      Submit
    </button>
  </form>
  )
}