'use client'
import { UserContext } from "@/context/userProvider" 
import { getIdFromToken } from "@/helper/getIdFromToken"
import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react"
import { toast } from "react-toastify"

export default  function Navbar(){
  
  const router=useRouter()
  const context =useContext(UserContext)
  console.log(context)
   // Check if context exists before accessing its properties
   if (!context) {
    // Handle the case where context is not available
    return null;
  }
  
 

  async function handleLogout(){
      try {
        await axios.post('/api/logout',{})
        toast.success('Logged Out!!')
        context?.setIsLogin(false)
        router.push('/')
      } catch (error) {
        console.log(error)
        toast.error('error in logging out')
      }
  }
console.log('reach')

  return (
    <nav className="w-full p-4 bg-sky-700 text-white flex justify-around items-center">
      <h1 className="text-2xl font-semibold text-sky-200 px-1  border-2 border-white-30 skew-x-12 " >Work-Manager</h1>
      <div className="flex gap-6 text-base items-center ">
        {
          context.isLogin?
        (<>
        <Link href='/show-tasks' className="hover:text-sky-300 focus:text-sky-300">Show tasks</Link>
        <Link href='/addwork' className="hover:text-sky-300 focus:text-sky-300">Add Task</Link>
        </>)
        :''
        }
        {
          context.isLogin?
          (<>
        <button  onClick={handleLogout} className="hover:text-sky-300 focus:text-sky-300">Logout</button>
          </>)
          :
          (
            <>
            
            <Link href='/' className="hover:text-sky-300 focus:text-sky-300">Home</Link>
            <Link href='/signin' className="hover:text-sky-300 focus:text-sky-300">Sign-in</Link>
            <Link href='/signup' className="bg-sky-600 p-2 rounded-2xl  font-light focus:text-sky-800 hover:bg-sky-800 hover:text-sky-500  transition-all">Sign-up</Link>
            </>
          )
        }
      </div>
    </nav>
  )
}